const { app, BrowserWindow, ipcMain, screen, Menu, Tray } = require('electron')
const path = require('path')
const { webContents } = require('electron')
const Store = require('electron-store');
const { config } = require('process');
Store.initRenderer()
const store = new Store();
const exeName = path.basename(process.execPath)
const appPath = app.isPackaged ? path.dirname(process.execPath) : app.getAppPath();
const WM_INITMENU = 0x0116;

// 初始化
let DefaultRightClickData = { a: false, b: false, c: false, d: true, e: false, f: false, g: false, h: false, i: true, j: false, k: false, l: false, }
init()


app.whenReady().then(() => {
    // 渲染窗口
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit()
})
//////////////////////////////////////////////////////////
//                      首选项设置保存                    //
//  * Preferences                                       //
//  * -Appearance                                       //
//  * --SaveXYWH                                        //
//  * ---isSaveXYWH                                     //
//  * ---X/Y/W/H                                        //
//  * --Transparency                                    //
//  * ---value                                          //
//  * ---percent                                        //
//  * --Curvature                                       //
//  * ---value                                          //
//  * ---percent                                        //
//  * -Other                                            //
//  * --ifMinimize                                      //
//  * --iFOpenAtStart                                   //
//  * -RightClick                                       //
//////////////////////////////////////////////////////////
function createWindow () {
    // 初始化
    let childWin = null
    let tray = null
    rightClickMenu = createRightClickMenu()
    // 主窗口
    const mainWindow = new BrowserWindow({
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
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })
    mainWindow.loadFile('./src/index.html');
    mainWindow.setIgnoreMouseEvents(false);
    mainWindow.setSkipTaskbar(true);
    mainWindow.setFullScreenable(false);
    // 主窗口准备好后显示
    mainWindow.once('ready-to-show', () => {
        changeTransparency(userTransparency)
        changeCurvature(userCurvature)
        mainWindow.show()
        if (store.get('Preferences.Other.ifMinimize')) {
            createTray()
        }
    })

    // 关闭主窗口事件(隐藏)
    mainWindow.on('close', (e) => {
        e.preventDefault();
        mainWindow.hide()
        console.log(mainWindow.eventNames())
    })
    // 主窗口大小改变事件
    mainWindow.on('resized', () => {
        mainWindow.webContents.send('send-H')
    })

    // 打开设置窗口
    ipcMain.on('openSetting', () => {
        openSetting()
    })
    // 刷新页面，获取下一个一言
    ipcMain.on('next', () => {
        mainWindow.webContents.reload()
        userTransparency = store.get('Appearance.Transparency.value') / 100
        changeTransparency(userTransparency)
        userCurvature = store.get('Appearance.Curvature.value') * 6
        changeCurvature(userCurvature)
    })
    // 更改窗口大小
    ipcMain.on('change-H', (event, arg) => {
        if (arg[1]) {
            mainWindow.setSize(arg[0], arg[1])
            store.set('Appearance.SaveXYWH.W', arg[0])
            store.set('Appearance.SaveXYWH.H', arg[1])
        }
        else {
            mainWindow.setSize(store.get('Appearance.SaveXYWH.W'), arg[0])
            store.set('Appearance.SaveXYWH.H', arg[0])
        }
    })
    // 右键菜单设置
    mainWindow.hookWindowMessage(WM_INITMENU, () => {
        mainWindow.setEnabled(false);
        mainWindow.setEnabled(true);
        rightClickMenu.popup();
    });


    // 设置窗口
    function createSetting () {
        if (childWin) {
            return
        }
        childWin = new BrowserWindow({
            width: 800,
            height: 600,
            frame: false,
            title: "设置",
            maximizable: false,
            icon: iconPath,
            show: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true,
                contextIsolation: false,
            }
        })
        childWin.loadFile('./src/setting.html')
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
        // 事件处理函数：发送WH主窗口大小数据
        const sendWH = () => {
            childWin.webContents.send('wh', mainWindow.getSize())
        }
        // 事件处理函数：发送XY主窗口位置数据
        const sendXY = () => {
            childWin.webContents.send('xy', mainWindow.getPosition())
        }
        ifOpenListener()

        // 记录开始按钮发生变更
        ipcMain.on('btn-changed-xywh', () => {
            ifOpenListener()
        })
        // 透明度滑动条发送变更
        ipcMain.on('transparency-changed', (event, arg) => {
            transparencyListener(arg[0], arg[1])
        })
        // 边角弧度滑动条发送变更
        ipcMain.on('curvature-changed', (event, arg) => {
            curvatureListener(arg[0], arg[1])
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
            ipcMain.removeAllListeners('setting:close')
        })
        // 函数：开启/关闭对主窗口变化的监听
        function ifOpenListener () {
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
    // 托盘设置
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
            click: () => {
                mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
            }
        },
        {
            type: 'separator'
        },
        {
            label: '退出',
            click: () => {
                ifSaveXYWH()
                setIFOpenAtStart()
                app.exit()
            }
        }
        ])
        tray.on('click', () => {
            mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
        })
        tray.on('right-click', () => {
            tray.popUpContextMenu(trayContextMenu)
        })
    }
    function createRightClickMenu () {
        var tmpRightClickData = store.get('RightClick')
        var rightClickMenu = Menu.buildFromTemplate([
        {
            label: '动画',
            type: 'checkbox',
            checked: tmpRightClickData.a,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                tmpRightClickData.a = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '漫画',
            type: 'checkbox',
            checked: tmpRightClickData.b,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.b = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '游戏',
            type: 'checkbox',
            checked: tmpRightClickData.c,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.c = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '文学',
            type: 'checkbox',
            checked: tmpRightClickData.d,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.d = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '原创',
            type: 'checkbox',
            checked: tmpRightClickData.e,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.e = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '来自网络',
            type: 'checkbox',
            checked: tmpRightClickData.f,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.f = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
            },
        {
            label: '其他',
            type: 'checkbox',
            checked: tmpRightClickData.g,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.g = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '影视',
            type: 'checkbox',
            checked: tmpRightClickData.h,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.h = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '诗词',
            type: 'checkbox',
            checked: tmpRightClickData.i,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.i = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '网易云',
            type: 'checkbox',
            checked: tmpRightClickData.j,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.j = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
        {
            label: '哲学',
            type: 'checkbox',
            checked: tmpRightClickData.k,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.k = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
            },
        {
            label: '抖机灵',
            type: 'checkbox',
            checked: tmpRightClickData.l,
            click: function (menuItem, event) {
                menuItem.checked = !menuItem.checked;
                var tmpRightClickData = store.get('RightClick')
                tmpRightClickData.l = menuItem.checked
                store.set('RightClick', tmpRightClickData)
            }
        },
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
            store.set('Appearance.SaveXYWH.W', store.get('Preferences.Appearance.SaveXYWH.defaultW'))
            store.set('Appearance.SaveXYWH.H', store.get('Preferences.Appearance.SaveXYWH.defaultH'))
            store.set('Appearance.SaveXYWH.X', store.get('Preferences.Appearance.SaveXYWH.defaultX'))
            store.set('Appearance.SaveXYWH.Y', store.get('Preferences.Appearance.SaveXYWH.defaultY'))
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
}
// 初始化
function init () {
    loadPreferences()
    if (store.has('Appearance.SaveXYWH.isSave')) {
        userW = store.get('Appearance.SaveXYWH.W')
        userH = store.get('Appearance.SaveXYWH.H')
        userX = store.get('Appearance.SaveXYWH.X')
        userY = store.get('Appearance.SaveXYWH.Y')
    }
    else {
        store.set('Appearance.SaveXYWH.isSave', store.get('Preferences.Appearance.SaveXYWH.isSaveXYWH'))
        userW = store.get('Preferences.Appearance.SaveXYWH.defaultW')
        userH = store.get('Preferences.Appearance.SaveXYWH.defaultH')
        userX = store.get('Preferences.Appearance.SaveXYWH.defaultX')
        userY = store.get('Preferences.Appearance.SaveXYWH.defaultY')
    }
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
    if (!store.has('Other.ifMinimize')) {
        store.set('Other.ifMinimize', store.get('Preferences.Other.ifMinimize'))
    }
    if (!store.has('Other.ifOpenAtStart')) {
        store.set('Other.ifOpenAtStart', store.get('Preferences.Other.ifOpenAtStart'))
    }
    if (!store.has('RightClick')) {
        store.set('RightClick', store.get('Preferences.RightClick'))
    }
    iconPath = path.join(__dirname, '/src/icons/hitokoto.ico');

}
// 首选项
function loadPreferences () {
    if (!store.has('Preferences.Appearance.SaveXYWH.isSaveXYWH')) {
        store.set('Preferences.Appearance.SaveXYWH.isSaveXYWH', true)
        store.set('Preferences.Appearance.SaveXYWH.defaultW', 600)
        store.set('Preferences.Appearance.SaveXYWH.defaultH', 300)
        let size = screen.getPrimaryDisplay().workAreaSize
        store.set('Preferences.Appearance.SaveXYWH.defaultX', parseInt(size.width * 0.5) - 300)
        store.set('Preferences.Appearance.SaveXYWH.defaultY', parseInt(size.height * 0.5) - 150)
    }
    if (!store.has('Preferences.Appearance.Transparency.value')) {
        store.set('Preferences.Appearance.Transparency.value', 50)
        store.set('Preferences.Appearance.Transparency.percent', 50)
    }
    if (!store.has('Preferences.Appearance.Curvature.value')) {
        store.set('Preferences.Appearance.Curvature.value', 0)
        store.set('Preferences.Appearance.Curvature.percent', 0)
    }
    if (!store.has('Other.ifMinimize')) {
        store.set('Preferences.Other.ifMinimize', true)
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
    if (store.get('Other.ifOpenAtStart')) {
        app.setLoginItemSettings({
            openAtLogin: true,
            path:appPath,
            args: ['--processStart', `"${exeName}"`],
        });
    }
    else {
        app.setLoginItemSettings({
            openAtLogin: false,
            path:appPath,
        });
    }
}

