#include <napi.h>
#include <tchar.h>
#include <stdio.h>
#include <windows.h>
#define WM_CLOSE 0x0010

// 声明重载EnumWindows回调函数EnumWindowsProc
extern BOOL CALLBACK EnumWindowsProc(HWND hwnd, LPARAM lParam);
// 声明一个结构体用于存储获取到的所有窗口类名
typedef struct windows_class
{
    char window_class_name[256];
    HWND win_hwnd;
    windows_class *next;

} windows_class;
// 声明一个全局结构体
windows_class *class_name;
// 记录屏幕窗口类数量
int num;

BOOL CALLBACK EnumWindowsProc(HWND hwnd, LPARAM lParam)
{
    // 声明结构体
    windows_class *enum_calss_name;
    // 初始化
    enum_calss_name = (windows_class *)malloc(sizeof(windows_class));
    // 填充0到类名变量中
    memset(enum_calss_name->window_class_name, 0, sizeof(enum_calss_name->window_class_name));
    // 获取窗口类名
    GetClassNameA(hwnd, enum_calss_name->window_class_name, sizeof(enum_calss_name->window_class_name));
    // 获取窗口句柄
    enum_calss_name->win_hwnd = hwnd;
    // 递增类数量
    num += 1;
    // 链表形式存储
    enum_calss_name->next = class_name;
    class_name = enum_calss_name;
    return TRUE;
}

Napi::Value Attach(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::Buffer<void *> wndHandle = info[0].As<Napi::Buffer<void *>>();
    HWND win = static_cast<HWND>(*reinterpret_cast<void **>(wndHandle.Data()));
    if (win == NULL)
    {
        Napi::TypeError::New(env, "couldn't locate the window you provide").ThrowAsJavaScriptException();
        return env.Null();
    }

    // 记录要插入的窗口
    HWND insert_hWnd = NULL;

    // 获取Progman窗口句柄
    HWND hWnd = FindWindow(_T("Progman"), _T("Program Manager"));
    if (hWnd == NULL)
    {
        Napi::TypeError::New(env, "Unable to get desktop handle").ThrowAsJavaScriptException();
        return env.Null();
    }
    // 发送多屏消息
    SendMessage(hWnd, 0x052c, 0, 0);
    // 结构体初始化
    class_name = (windows_class *)malloc(sizeof(windows_class));
    // WorkerW的子窗口
    HWND childWindow_hwnd = NULL;
    // 枚举屏幕上所有窗口
    EnumWindows(EnumWindowsProc, 0);
    // 循环比对找到->WorkerW类, 获取要嵌入窗口的句柄
    for (int i = 0; i < num; ++i)
    {
        if (strncmp(class_name->window_class_name, "WorkerW", strlen(class_name->window_class_name)) == 0)
        { // 以有效字符比对，防止连同字符“0”等无效字符也一同包含在一起比对
            childWindow_hwnd = FindWindowExA(class_name->win_hwnd, 0, "SHELLDLL_DefView", NULL);
            if (childWindow_hwnd != NULL)
            {
                insert_hWnd = class_name->win_hwnd;
                char wname[256];
                GetClassNameA(childWindow_hwnd, wname, sizeof(wname));
                if (strncmp(wname, "SHELLDLL_DefView", strlen(wname)) != 0)
                {
                    Napi::TypeError::New(env, "Child Class Name is not SHELLDLL_DefView").ThrowAsJavaScriptException();
                    return env.Null();
                }
                break;
            }
        }
        class_name = class_name->next;
    }
    // 设置父窗口
    SetParent(win, insert_hWnd);

    return Napi::Boolean::New(env, true);
}

Napi::Value Detach(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    Napi::Buffer<void *> wndHandle = info[0].As<Napi::Buffer<void *>>();
    HWND win = static_cast<HWND>(*reinterpret_cast<void **>(wndHandle.Data()));

    SetParent(win, NULL);

    return Napi::Boolean::New(env, true);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "attach"), Napi::Function::New(env, Attach));
    exports.Set(Napi::String::New(env, "detach"), Napi::Function::New(env, Detach));

    return exports;
}

NODE_API_MODULE(addtoDesktop, Init)
