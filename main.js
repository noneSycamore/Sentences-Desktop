const { app, BrowserWindow, webContents, ipcMain, screen, Menu, Tray } = require('electron')
const path = require('path')
const Store = require('electron-store');
const { attach, detach } = require("electron-addtodesktop");
Store.initRenderer()
const store = new Store();
const appPath = app.isPackaged ? process.execPath : app.getAppPath();
const WM_INITMENU = 0x0116;

// 初始化
let DefaultRightClickData = { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: true, j: false, k: false, l: false, }                  
let mainWindow = null
let childWin = null
let tray = null
// 单例模式
const isFirstInstance = app.requestSingleInstanceLock()

if (!isFirstInstance) {
    app.quit()
} else {
    app.on('second-instance', () => {
        if (mainWindow) {
            mainWindow.focus()
        }
    })
}

app.whenReady().then(() => {
    init()
    createMainWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        beforeExit()
        app.relaunch()  // 崩溃重启
    }
})
app.on('before-quit', (event) => {
    event.preventDefault()
    beforeExit()
})
//////////////////////////////////////////////////////////
//                      首选项设置保存                    //
//  Preferences                                         //
//  -Appearance                                         //
//  --SaveXYWH                                          //
//  ---isSaveXYWH                                       //
//  ---X/Y/W/H                                          //
//  --Transparency                                      //
//  ---value                                            //
//  ---percent                                          //
//  --Curvature                                         //
//  ---value                                            //
//  ---percent                                          //
//  --FontSize                                          //
//  ---isSetSize                                        //
//  ---fontSizeTitle                                    //
//  ----value                                           //
//  ----percent                                         //
//  ---fontSizeText                                     //
//  ----value                                           //
//  ----percent                                         //
//  ---fontSizeFrom                                     //
//  ----value                                           //
//  ----percent                                         //
//  -Other                                              //
//  --ifMinimize                                        //
//  --iFOpenAtStart                                     //
//  -RightClick                                         //
//////////////////////////////////////////////////////////
function createMainWindow () {
    if (mainWindow) {
        return
    }
    // 主窗口
    mainWindow = new BrowserWindow({
        // useContentSize: true,
        width: userW,
        height: userH,
        minWidth: 350,
        minHeight: 200,
        x: userX,
        y: userY,
        frame: false,
        transparent: true,
        show: false,
        maximizable: false,
        skipTaskbar: true,
        webPreferences: {
            devTools: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })
    attach(mainWindow);
    mainWindow.loadFile('./src/index.html');
    setMainWindow()
}
function setMainWindow () {
    mainWindow.setIgnoreMouseEvents(false);
    mainWindow.setFullScreenable(false);
    // 主窗口准备好后显示
    mainWindow.once('ready-to-show', () => {
        changeTransparency(userTransparency)
        changeCurvature(userCurvature)
        changeFontSizeTitle(userFontSizeTitle)
        changeFontSizeText(userFontSizeText)
        changeFontSizeFrom(userFontSizeFrom)
        openListenerWhenShow()
        if (store.get('Other.ifMinimize')) {
            createTray()
        }
        mainWindow.show()
    })

}
// 显示时开启监听
function openListenerWhenShow () {
    // 主窗口大小改变事件
    mainWindow.on('resized', () => {
        mainWindow.webContents.send('send-H', 'WH')
    })
    // 右键菜单设置
    mainWindow.hookWindowMessage(WM_INITMENU, () => {
        mainWindow.setEnabled(false);
        mainWindow.setEnabled(true);
        rightClickMenu = createRightClickMenu()
        rightClickMenu.popup();
    });
    // 打开设置窗口
    ipcMain.on('openSetting', () => {
        openSetting()
    })
    // 更改窗口大小
    ipcMain.on('change-H', (event, arg) => {
        if (arg[1] !== 'onlyH') {
            mainWindow.setSize(arg[0], arg[1])
            store.set('Appearance.SaveXYWH.W', arg[0])
            store.set('Appearance.SaveXYWH.H', arg[1])
        }
        else {
            mainWindow.setSize(store.get('Appearance.SaveXYWH.W'), arg[0])
            store.set('Appearance.SaveXYWH.H', arg[0])
        }
    })
}
// 设置窗口
function createSetting () {
    if (childWin) {
        childWin.show()
        return
    }
    childWin = new BrowserWindow({
        width: 850,
        height: 650,
        frame: false,
        title: "设置",
        icon: iconPath,
        show: false,
        maximizable: false,
        webPreferences: {
            devTools: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })
    childWin.loadFile('./src/setting.html')
    childWin.webContents.closeDevTools();
    childWin.setFullScreenable(false);
    // 设置窗口准备好后显示
    childWin.once('ready-to-show', () => {
        childWin.show()
    })
    childWin.on('closed', () => {
        childWin = null
    })
    // 右键菜单设置
    childWin.hookWindowMessage(WM_INITMENU, () => {
        childWin.setEnabled(false);
        childWin.setEnabled(true);
    });
}
// 打开设置界面
function openSetting () {
    // 创建设置窗口
    createSetting()
    if (childWin === null) { 
        return
    }
    // 事件处理函数：发送WH主窗口大小数据
    const sendWH = () => {
        childWin.webContents.send('wh', mainWindow.getSize())
    }
    // 事件处理函数：发送XY主窗口位置数据
    const sendXY = () => {
        childWin.webContents.send('xy', mainWindow.getPosition())
    }
    ifOpenXYWHListener()
    ifChangeFontSizeListener()

    // 记录开始按钮发生变更
    ipcMain.on('btn-changed-xywh', () => {
        ifOpenXYWHListener()
    })
    // 透明度滑动条发送变更
    ipcMain.on('transparency-changed', (event, arg) => {
        transparencyListener(arg[0], arg[1])
    })
    // 边角弧度滑动条发送变更
    ipcMain.on('curvature-changed', (event, arg) => {
        curvatureListener(arg[0], arg[1])
    })
    // 是否改变文字大小按钮发生变更
    ipcMain.on('btn-changed-fontSize', () => {
        ifChangeFontSizeListener()
    })
    // 是否最小化按钮发生变更
    ipcMain.on('btn-changed-minimize', () => {
        ifMinimizeListener()
    })
    // 关闭设置窗口（隐藏窗口同时，关闭事件监听器
    ipcMain.once('setting:close', () => {
        if (childWin) {
            childWin.close()
        }
        mainWindow.removeListener('resize', sendWH)
        mainWindow.removeListener('move', sendXY)
        ipcMain.removeAllListeners('btn-changed-xywh')
        ipcMain.removeAllListeners('transparency-changed')
        ipcMain.removeAllListeners('curvature-changed')
        ipcMain.removeAllListeners('btn-changed-fontSize')
        ipcMain.removeAllListeners('btn-changed-minimize')
        ipcMain.removeAllListeners('setting:close')
    })
    // 函数：开启/关闭对主窗口变化的监听
    function ifOpenXYWHListener () {
        if (store.get('Appearance.SaveXYWH.isSave')) {
            // 如果按钮打开，先发送一次数据，否则显示空白
            childWin.webContents.send('wh', mainWindow.getSize())
            childWin.webContents.send('xy', mainWindow.getPosition())
            mainWindow.on('resize', sendWH)
            mainWindow.on('move', sendXY)
        }
        else {
            mainWindow.removeListener('resize', sendWH)
            mainWindow.removeListener('move', sendXY)
        }
    }
    // 函数：透明度变化
    function transparencyListener (value, percent) {
        store.set('Appearance.Transparency.value', value);
        store.set('Appearance.Transparency.percent', percent);
        userTransparency = store.get('Appearance.Transparency.value') / 100
        changeTransparency(userTransparency)
    }
    // 函数：边角弧度变化
    function curvatureListener (value, percent) {
        store.set('Appearance.Curvature.value', value);
        store.set('Appearance.Curvature.percent', percent);
        userCurvature = store.get('Appearance.Curvature.value') * 6
        changeCurvature(userCurvature)
    }
    // 函数：标题文字大小变化
    function fontSizeTitleListener (value, percent) {
        store.set('Appearance.FontSize.fontSizeTitle.value', value);
        store.set('Appearance.FontSize.fontSizeTitle.percent', percent);
        userFontSizeTitle = store.get('Appearance.FontSize.fontSizeTitle.value')
        changeFontSizeTitle(userFontSizeTitle)
    }
    // 函数：主体文字大小变化
    function fontSizeTextListener (value, percent) {
        store.set('Appearance.FontSize.fontSizeText.value', value);
        store.set('Appearance.FontSize.fontSizeText.percent', percent);
        userFontSizeText = store.get('Appearance.FontSize.fontSizeText.value')
        changeFontSizeText(userFontSizeText)
    }
    // 函数：来源文字大小变化
    function fontSizeFromListener (value, percent) {
        store.set('Appearance.FontSize.fontSizeFrom.value', value);
        store.set('Appearance.FontSize.fontSizeFrom.percent', percent);
        userFontSizeFrom = store.get('Appearance.FontSize.fontSizeFrom.value')
        changeFontSizeFrom(userFontSizeFrom)
    }
    // 函数：开启/关闭对文字大小改变滑动条的监听
    function ifChangeFontSizeListener () {
        if (store.get('Appearance.FontSize.isSetSize')) { 
            ipcMain.on('fontSizeTitle-changed', (event, arg) => {
                fontSizeTitleListener(arg[0], arg[1])
            })
            ipcMain.on('fontSizeText-changed', (event, arg) => {
                fontSizeTextListener(arg[0], arg[1])
            })
            ipcMain.on('fontSizeFrom-changed', (event, arg) => {
                fontSizeFromListener(arg[0], arg[1])
            })
            mainWindow.webContents.send('send-H', 'onlyH')
        }
        else {
            ipcMain.removeAllListeners('fontSizeTitle-changed')
            ipcMain.removeAllListeners('fontSizeText-changed')
            ipcMain.removeAllListeners('fontSizeFrom-changed')
            // 改回默认大小
            store.set('Appearance.FontSize.fontSizeTitle.value', store.get('Preferences.Appearance.FontSize.fontSizeTitle.value'))
            store.set('Appearance.FontSize.fontSizeTitle.percent', store.get('Preferences.Appearance.FontSize.fontSizeTitle.percent'))
            store.set('Appearance.FontSize.fontSizeText.value', store.get('Preferences.Appearance.FontSize.fontSizeText.value'))
            store.set('Appearance.FontSize.fontSizeText.percent', store.get('Preferences.Appearance.FontSize.fontSizeText.percent'))
            store.set('Appearance.FontSize.fontSizeFrom.value', store.get('Preferences.Appearance.FontSize.fontSizeFrom.value'))
            store.set('Appearance.FontSize.fontSizeFrom.percent', store.get('Preferences.Appearance.FontSize.fontSizeFrom.percent'))
            userFontSizeTitle = store.get('Appearance.FontSize.fontSizeTitle.value')
            changeFontSizeTitle(userFontSizeTitle)
            userFontSizeText = store.get('Appearance.FontSize.fontSizeText.value')
            changeFontSizeText(userFontSizeText)
            userFontSizeFrom = store.get('Appearance.FontSize.fontSizeFrom.value')
            changeFontSizeFrom(userFontSizeFrom)
            mainWindow.webContents.send('send-H', 'onlyH')
        }
    }
    // 函数：开启/关闭对是否最小化到托盘的监听
    function ifMinimizeListener () {
        if (store.get('Other.ifMinimize')) { 
            createTray()
        }
        else if (tray) {
            tray.destroy()
            tray = null
        }
    }
}
// 创建托盘
function createTray () {
    if (tray) {
        return
    }
    tray = new Tray(iconPath)
    tray.setToolTip('Hitokoto Desktop')
    const trayContextMenu = Menu.buildFromTemplate([
    {
        label: '设置',
        click: () => {
            openSetting()
        }
    },
    {
        label: '显示/隐藏',
        // type: 'checkbox',
        click: () => {
            if (mainWindow.isVisible()) {
                mainWindow.hide()
                mainWindow.removeAllListeners('resized')
                ipcMain.removeAllListeners('openSetting')
                ipcMain.removeAllListeners('change-H')
            }
            else {
                openListenerWhenShow()
                mainWindow.show();
            }
        }
    },
    {
        type: 'separator'
    },
    {
        label: '退出',
        click: () => {
            beforeExit()
        }
    }
    ])
    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide()
            mainWindow.removeAllListeners('resized')
            ipcMain.removeAllListeners('openSetting')
            ipcMain.removeAllListeners('change-H')
        }
        else {
            openListenerWhenShow()
            mainWindow.show();
        }
    })
    tray.on('right-click', () => {
        tray.popUpContextMenu(trayContextMenu)
    })
}
// 创建右键菜单
function createRightClickMenu () {
    var tmpRightClickData = store.get('RightClick')
    var rightClickMenu = Menu.buildFromTemplate([
    {
        label: '动画',
        type: 'checkbox',
        checked: tmpRightClickData.a,
        click: function (menuItem, event) {
            tmpRightClickData.a = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '漫画',
        type: 'checkbox',
        checked: tmpRightClickData.b,
        click: function (menuItem, event) {
            tmpRightClickData.b = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '游戏',
        type: 'checkbox',
        checked: tmpRightClickData.c,
        click: function (menuItem, event) {
            tmpRightClickData.c = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '文学',
        type: 'checkbox',
        checked: tmpRightClickData.d,
        click: function (menuItem, event) {
            tmpRightClickData.d = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '原创',
        type: 'checkbox',
        checked: tmpRightClickData.e,
        click: function (menuItem, event) {
            tmpRightClickData.e = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '来自网络',
        type: 'checkbox',
        checked: tmpRightClickData.f,
        click: function (menuItem, event) {
            tmpRightClickData.f = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
        },
    {
        label: '其他',
        type: 'checkbox',
        checked: tmpRightClickData.g,
        click: function (menuItem, event) {
            tmpRightClickData.g = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '影视',
        type: 'checkbox',
        checked: tmpRightClickData.h,
        click: function (menuItem, event) {
            tmpRightClickData.h = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '诗词',
        type: 'checkbox',
        checked: tmpRightClickData.i,
        click: function (menuItem, event) {
            tmpRightClickData.i = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '网易云',
        type: 'checkbox',
        checked: tmpRightClickData.j,
        click: function (menuItem, event) {
            tmpRightClickData.j = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        label: '哲学',
        type: 'checkbox',
        checked: tmpRightClickData.k,
        click: function (menuItem, event) {
            tmpRightClickData.k = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
        },
    {
        label: '抖机灵',
        type: 'checkbox',
        checked: tmpRightClickData.l,
        click: function (menuItem, event) {
            tmpRightClickData.l = menuItem.checked
            store.set('RightClick', tmpRightClickData)
        }
    },
    {
        type: 'separator'
        },
    {
        label: store.get('Other.ifMinimize') ? '最小化' : '退出',
        id: 'changeExit',
        click: () => {
            if (store.get('Other.ifMinimize')) {
                mainWindow.hide()
                mainWindow.removeAllListeners('resized')
                ipcMain.removeAllListeners('openSetting')
                ipcMain.removeAllListeners('change-H')
            }
            else {
                beforeExit()
            }
        }
    }
    ])
    return rightClickMenu
}
// 保存窗口位置
function ifSaveXYWH () {
    const flagXYWH = store.get('Appearance.SaveXYWH.isSave');
    if (flagXYWH) {
        let mainsize = mainWindow.getSize()
        let mainpos = mainWindow.getPosition()
        store.set('Appearance.SaveXYWH.W', mainsize[0])
        store.set('Appearance.SaveXYWH.H', mainsize[1])
        store.set('Appearance.SaveXYWH.X', mainpos[0])
        store.set('Appearance.SaveXYWH.Y', mainpos[1])
    }
    else {
        store.set('Appearance.SaveXYWH.W', store.get('Preferences.Appearance.SaveXYWH.W'))
        store.set('Appearance.SaveXYWH.H', store.get('Preferences.Appearance.SaveXYWH.H'))
        store.set('Appearance.SaveXYWH.X', store.get('Preferences.Appearance.SaveXYWH.X'))
        store.set('Appearance.SaveXYWH.Y', store.get('Preferences.Appearance.SaveXYWH.Y'))
    }
}
// 更改主窗口透明度
function changeTransparency (userTransparency) {
    mainWindow.webContents.executeJavaScript(`allItems.style.backgroundColor = "rgba(0, 0, 0, ${userTransparency})";`)
}
// 更改主边角弧度
function changeCurvature (userCurvature) {
    mainWindow.webContents.executeJavaScript(`allItems.style.borderRadius = "${userCurvature}px";`)
}
// 更改标题文字大小
function changeFontSizeTitle (userFontSizeTitle) {
    mainWindow.webContents.executeJavaScript(`title_text.style.fontSize = "${userFontSizeTitle}px";`)
}
// 更改一言文字大小
function changeFontSizeText (userFontSizeText) {
    mainWindow.webContents.executeJavaScript(`hitokoto_text.style.fontSize = "${userFontSizeText}px";`)
}
// 更改来源文字大小
function changeFontSizeFrom (userFontSizeFrom) {
    mainWindow.webContents.executeJavaScript(`hitokoto_from.style.fontSize = "${userFontSizeFrom}px";`)
}
// 退出前操作
function beforeExit () {
    setIFOpenAtStart()
    if (!mainWindow.isDestroyed()) { 
        ifSaveXYWH()
        detach(mainWindow);
    }
    app.exit()
}

// 初始化
function init () {
    loadPreferences()
    if (!store.has('Appearance.SaveXYWH.isSave')) {
        store.set('Appearance.SaveXYWH.isSave', store.get('Preferences.Appearance.SaveXYWH.isSave'))
        store.set('Appearance.SaveXYWH.W', store.get('Preferences.Appearance.SaveXYWH.W'))
        store.set('Appearance.SaveXYWH.H', store.get('Preferences.Appearance.SaveXYWH.H'))
        store.set('Appearance.SaveXYWH.X', store.get('Preferences.Appearance.SaveXYWH.X'))
        store.set('Appearance.SaveXYWH.Y', store.get('Preferences.Appearance.SaveXYWH.Y'))
    }
    userW = store.get('Appearance.SaveXYWH.W')
    userH = store.get('Appearance.SaveXYWH.H')
    userX = store.get('Appearance.SaveXYWH.X')
    userY = store.get('Appearance.SaveXYWH.Y')
    if (!store.has('Appearance.Transparency.value')) {
        store.set('Appearance.Transparency.value', store.get('Preferences.Appearance.Transparency.value'))
        store.set('Appearance.Transparency.percent', store.get('Preferences.Appearance.Transparency.percent'))
    }
    userTransparency = store.get('Appearance.Transparency.value') / 100
    if (!store.has('Appearance.Curvature.value')) {
        store.set('Appearance.Curvature.value', store.get('Preferences.Appearance.Curvature.value'))
        store.set('Appearance.Curvature.percent', store.get('Preferences.Appearance.Curvature.percent'))
    }
    userCurvature = store.get('Appearance.Curvature.value') * 6
    if (!store.has('Appearance.FontSize.isSetSize')) {
        store.set('Appearance.FontSize.isSetSize', store.get('Preferences.Appearance.FontSize.isSetSize'))
        store.set('Appearance.FontSize.fontSizeTitle.value', store.get('Preferences.Appearance.FontSize.fontSizeTitle.value'))
        store.set('Appearance.FontSize.fontSizeTitle.percent', store.get('Preferences.Appearance.FontSize.fontSizeTitle.percent'))
        store.set('Appearance.FontSize.fontSizeText.value', store.get('Preferences.Appearance.FontSize.fontSizeText.value'))
        store.set('Appearance.FontSize.fontSizeText.percent', store.get('Preferences.Appearance.FontSize.fontSizeText.percent'))
        store.set('Appearance.FontSize.fontSizeFrom.value', store.get('Preferences.Appearance.FontSize.fontSizeFrom.value'))
        store.set('Appearance.FontSize.fontSizeFrom.percent', store.get('Preferences.Appearance.FontSize.fontSizeFrom.percent'))
    }
    userFontSizeTitle = store.get('Appearance.FontSize.fontSizeTitle.value')
    userFontSizeText = store.get('Appearance.FontSize.fontSizeText.value')
    userFontSizeFrom = store.get('Appearance.FontSize.fontSizeFrom.value')
    if (!store.has('Other.ifMinimize')) {
        store.set('Other.ifMinimize', store.get('Preferences.Other.ifMinimize'))
    }
    if (!store.has('Other.ifOpenAtStart')) {
        store.set('Other.ifOpenAtStart', store.get('Preferences.Other.ifOpenAtStart'))
    }
    if (!store.has('RightClick')) {
        store.set('RightClick', store.get('Preferences.RightClick'))
    }
    iconPath = path.join(__dirname, '/src/icons/icon.ico');
    setIFOpenAtStart()

}
// 首选项
function loadPreferences () {
    if (!store.has('Preferences.Appearance.SaveXYWH.isSave')) {
        store.set('Preferences.Appearance.SaveXYWH.isSave', true)
        store.set('Preferences.Appearance.SaveXYWH.W', 600)
        store.set('Preferences.Appearance.SaveXYWH.H', 300)
        let size = screen.getPrimaryDisplay().workAreaSize
        store.set('Preferences.Appearance.SaveXYWH.X', parseInt(size.width * 0.5) - 300)
        store.set('Preferences.Appearance.SaveXYWH.Y', parseInt(size.height * 0.5) - 150)
    }
    if (!store.has('Preferences.Appearance.Transparency.value')) {
        store.set('Preferences.Appearance.Transparency.value', 50)
        store.set('Preferences.Appearance.Transparency.percent', 50)
    }
    if (!store.has('Preferences.Appearance.Curvature.value')) {
        store.set('Preferences.Appearance.Curvature.value', 0)
        store.set('Preferences.Appearance.Curvature.percent', 0)
    }
    if (!store.has('Preferences.Appearance.FontSize.isSetSize')) {
        store.set('Preferences.Appearance.FontSize.isSetSize', false)
        store.set('Preferences.Appearance.FontSize.fontSizeTitle.value', 28)
        store.set('Preferences.Appearance.FontSize.fontSizeTitle.percent', 45)
        store.set('Preferences.Appearance.FontSize.fontSizeText.value', 26)
        store.set('Preferences.Appearance.FontSize.fontSizeText.percent', 40)
        store.set('Preferences.Appearance.FontSize.fontSizeFrom.value', 18)
        store.set('Preferences.Appearance.FontSize.fontSizeFrom.percent', 20)
    }
    if (!store.has('Other.ifMinimize')) {
        store.set('Preferences.Other.ifMinimize', false)
    }
    if (!store.has('Other.ifOpenAtStart')) {
        store.set('Preferences.Other.ifOpenAtStart', true)
    }
    if (!store.has('RightClick')) {
        store.set('Preferences.RightClick', DefaultRightClickData)
    }
}
//设置是否开机启动
function setIFOpenAtStart () {
    app.setLoginItemSettings({
        openAtLogin: store.get('Other.ifOpenAtStart'),
        path:appPath,
    });
}

