#include <napi.h>
#include <tchar.h>
#include <stdio.h>
#include <windows.h>
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

    // 记录要插入的窗口
    HWND insert_hWnd;

    // 获取窗口句柄
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
    // 枚举屏幕上所有窗口
    EnumWindows(EnumWindowsProc, 0);
    // 循环比对找到->WorkerW类
    for (int i = 0; i < num; ++i)
    {
        if (strncmp(class_name->window_class_name, "WorkerW", strlen(class_name->window_class_name)) == 0)
        { // 以有效字符比对，防止连同字符“0”等无效字符也一同包含在一起比对
            HWND childWindow_hwnd = FindWindowExA(class_name->win_hwnd, 0, "SHELLDLL_DefView", NULL);
            if (childWindow_hwnd == NULL)
            {
                SendMessage(class_name->win_hwnd, 16, 0, 0);
                if (insert_hWnd) // 如果insert_hWnd不为空，break
                {
                    break;
                }
            }
            else
            {
                insert_hWnd = class_name->win_hwnd;
                // 获取成功看一下下一个窗口是不是Progman
                class_name = class_name->next;
                if (class_name->window_class_name == "Progman")
                {
                    HWND childWindow_hwnd = FindWindowExA(class_name->win_hwnd, 0, "WorkerW", NULL); // 获取图标下面的WorkerW子窗口
                    if (childWindow_hwnd == NULL)
                    { // 获取不到代表该窗口已经被关闭了
                        break;
                    }
                    else
                    {
                        SendMessage(childWindow_hwnd, 16, 0, 0);
                    }
                }
                else
                {
                    SendMessage(class_name->win_hwnd, 16, 0, 0);
                }
            }
        }
        class_name = class_name->next;
    }
    // 获取要嵌入窗口的句柄
    if (win == NULL)
    {
        Napi::TypeError::New(env, "couldn't locate the window you provide").ThrowAsJavaScriptException();
        return env.Null();
    }
    else
    {
        SetParent(win, insert_hWnd);
    }
    return Napi::Boolean::New(env, true);
}

Napi::Value Detach(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    Napi::Buffer<void *> wndHandle = info[0].As<Napi::Buffer<void *>>();
    HWND win = static_cast<HWND>(*reinterpret_cast<void **>(wndHandle.Data()));

    SetParent(win, 0);

    return Napi::Boolean::New(env, true);
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "attach"), Napi::Function::New(env, Attach));
    exports.Set(Napi::String::New(env, "detach"), Napi::Function::New(env, Detach));

    return exports;
}

NODE_API_MODULE(addtoDesktop, Init)
