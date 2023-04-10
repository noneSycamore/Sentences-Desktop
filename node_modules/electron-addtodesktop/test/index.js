const { app, BrowserWindow } = require('electron')
const {attach} = require("../index");

let mainWindow = null


app.whenReady().then(() => {
    // 渲染窗口
    createWindow()
})

function createWindow () {
    if (mainWindow) {
        return
    }
    // 主窗口
    mainWindow = new BrowserWindow({
        width: 350,
        height: 200,
    })
    attach(mainWindow);
    // mainWindow.loadFile('./src/index.html');
}