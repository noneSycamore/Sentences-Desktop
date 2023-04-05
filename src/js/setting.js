const { ipcRenderer } = require('electron')
const tabManage = document.querySelectorAll('.tab-manage')
const contentManage = document.querySelectorAll('.content-manage')

const closeDom = document.querySelector('.close')
const xywhManage = document.querySelectorAll('.xywh-manage')
const btnXYWH = document.getElementById('btn-xywh')
const transparency = document.getElementById('Transparency')
const curvature = document.getElementById('Curvature')
const btnFontSize = document.getElementById('btn-fontSize')
const fontSizeManage = document.querySelectorAll('.fontSize-manage')
const fontSizeTitle = document.getElementById('FontSizeTitle')
const fontSizeText = document.getElementById('FontSizeText')
const fontSizeFrom = document.getElementById('FontSizeFrom')
const btnMinimize = document.getElementById('btn-minimize')
const btnOpenAtStart = document.getElementById('btn-openAtStart')

const Store = require('electron-store');
const store = new Store();
//////////////////////////////////////////////////////////
//                 Setting Data Structure               //
//  Appearance                                          //
//  -SaveXYWH                                           //
//  --isSave                                            //
//  --X/Y/W/H                                           //
//  -Transparency                                       //
//  --value                                             //
//  --percent                                           //
//  -Curvature                                          //
//  --value                                             //
//  --percent                                           //
//  -FontSize                                           //
//  --isSetSize                                         //
//  --fontSizeTitle                                     //
//  ---value                                            //
//  ---percent                                          //
//  --fontSizeText                                      //
//  ---value                                            //
//  ---percent                                          //
//  --fontSizeFrom                                      //
//  ---value                                            //
//  ---percent                                          //
//  Other                                               //
//  -ifMinimize                                         //
//  -ifOpenAtStart                                      //
//////////////////////////////////////////////////////////

//初始化显示窗口
initIfSaveXYWH()
initTransparency()
initCurvature()
initIfFontSize()
initIfMinimize()
initIfOpenAtStart()

//绑定事件
tabManage.forEach((el,index) => {
el.addEventListener('click', () => {
    activeTab (index)
    activeContent (index)
})
})

//监听关闭按钮
closeDom.addEventListener('click', () => {
    ipcRenderer.send('setting:close')
})

//////////////////////////////////////////////////////////
//                      通用的函数                        //
//////////////////////////////////////////////////////////
//设置选项切换
function activeTab (index) {
    tabManage.forEach((tabEl) => {
        tabEl.classList.remove('nav-active')
    })
    tabManage[index].classList.add('nav-active')
}
//设置选项内容切换
function activeContent (index) {
    contentManage.forEach((taskEl) => {
        taskEl.classList.remove('content-active')
    })
    contentManage[index].classList.add('content-active')
}
// 滑动按钮打开
function btnOn (btn) {
    btn.innerHTML = 
        `<span class="btn-on-circle"></span>
        <span class="btn-on-text">ON</span>`
    btn.style="background-color: #31c27c;"
}
// 滑动按钮关闭
function btnOff (btn) {
    btn.innerHTML = 
        `<span class="btn-off-circle"></span>
        <span class="btn-off-text">OFF</span>`
    btn.style="background-color: #ccc;"
}
// 滑动条控制
function changeSliders (e, objPercent, valueID) {
    e.style.backgroundSize = `${objPercent}%, 100%`
    document.getElementById(valueID).innerText = e.value;
};
//////////////////////////////////////////////////////////
//                    特定部件的函数                      //
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//                        初始化                         //
//////////////////////////////////////////////////////////
// 初始化 - 是否保留主窗口关闭时的位置和大小 - XYWH
function initIfSaveXYWH () {
    var isSave = store.get('Appearance.SaveXYWH.isSave')
    if (isSave) {
        btnOnXYWH()
    }
    else {
        btnOffXYWH()
    }
}
// 初始化 - 透明度设置
function initTransparency () { 
    var transparencyVal = store.get('Appearance.Transparency.value')
    var transparencyPercent = store.get('Appearance.Transparency.percent')
    transparency.value = transparencyVal
    changeSliders(transparency, transparencyPercent, 'Transparency-value')
}
// 初始化 - 边角弧度设置
function initCurvature () { 
    var curvatureVal = store.get('Appearance.Curvature.value')
    var curvaturePercent = store.get('Appearance.Curvature.percent')
    curvature.value = curvatureVal
    changeSliders(curvature, curvaturePercent, 'Curvature-value')
}
// 初始化 - 是否开启文字大小设置 - FontSize
function initIfFontSize () {
    var isSetSize = store.get('Appearance.FontSize.isSetSize')
    if (isSetSize) {
        btnOnFontSize()
    }
    else {
        btnOffFontSize()
    }
}
// 初始化 - 标题文字大小设置
function initFontSizeTitle () { 
    var fontSizeTitleVal = store.get('Appearance.FontSize.fontSizeTitle.value')
    var fontSizeTitlePercent = store.get('Appearance.FontSize.fontSizeTitle.percent')
    fontSizeTitle.value = fontSizeTitleVal
    changeSliders(fontSizeTitle, fontSizeTitlePercent, 'FontSizeTitle-value')
}
// 初始化 - 主体文字大小设置
function initFontSizeText () { 
    var fontSizeTextVal = store.get('Appearance.FontSize.fontSizeText.value')
    var fontSizeTextPercent = store.get('Appearance.FontSize.fontSizeText.percent')
    fontSizeText.value = fontSizeTextVal
    changeSliders(fontSizeText, fontSizeTextPercent, 'FontSizeText-value')
}
// 初始化 - 来源文字大小设置
function initFontSizeFrom () { 
    var fontSizeFromVal = store.get('Appearance.FontSize.fontSizeFrom.value')
    var fontSizeFromPercent = store.get('Appearance.FontSize.fontSizeFrom.percent')
    fontSizeFrom.value = fontSizeFromVal
    changeSliders(fontSizeFrom, fontSizeFromPercent, 'FontSizeFrom-value')
}
// 初始化 - 是否最小化到托盘 - Minimize
function initIfMinimize () {
    var ifMinimize = store.get('Other.ifMinimize')
    if (ifMinimize) {
        btnOnMinimize()
    }
    else {
        btnOffMinimize()
    }
}
// 初始化 - 开机自启动 - openAtStart
function initIfOpenAtStart () {
    var ifOpenAtStart = store.get('Other.ifOpenAtStart')
    if (ifOpenAtStart) {
        btnOnOpenAtStart()
    }
    else {
        btnOffOpenAtStart()
    }
}
//////////////////////////////////////////////////////////
//                      组件触发事件                      //
//////////////////////////////////////////////////////////
// 滑动按钮控制 - XYWH
function on_off_XYWH(){
    var text = btnXYWH.children[1];
    if(text.innerText==="ON"){
        btnOffXYWH()
    } else {
        btnOnXYWH()
    }
    // 发送变动数据
    ipcRenderer.send('btn-changed-xywh')
}
// 透明度变更
function changeTransparency () {
    var objVal = parseFloat(transparency.value);
    var objMax = parseFloat(transparency.max);
    var objMin = parseFloat(transparency.min);
    var objPercent = (objVal-objMin) / (objMax-objMin) * 100
    changeSliders(transparency, objPercent, 'Transparency-value')
    ipcRenderer.send('transparency-changed',[objVal, objPercent])
}
// 边角弧度变更
function changeCurvature () {
    var objVal = parseFloat(curvature.value);
    var objMax = parseFloat(curvature.max);
    var objMin = parseFloat(curvature.min);
    var objPercent = (objVal-objMin) / (objMax-objMin) * 100
    changeSliders(curvature, objPercent, 'Curvature-value')
    ipcRenderer.send('curvature-changed',[objVal, objPercent])
}
// 滑动按钮控制 - FontSize
function on_off_FontSize(){
    var text = btnFontSize.children[1];
    if(text.innerText==="ON"){
        btnOffFontSize()
    } else {
        btnOnFontSize()
    }
    // 发送变动数据
    ipcRenderer.send('btn-changed-fontSize')
}
// 标题文字大小变更
function changeFontSizeTitle () {
    var objVal = parseFloat(fontSizeTitle.value);
    var objMax = parseFloat(fontSizeTitle.max);
    var objMin = parseFloat(fontSizeTitle.min);
    var objPercent = (objVal-objMin) / (objMax-objMin) * 100
    changeSliders(fontSizeTitle, objPercent, 'FontSizeTitle-value')
    ipcRenderer.send('fontSizeTitle-changed',[objVal, objPercent])
}
// 主体文字大小变更
function changeFontSizeText () {
    var objVal = parseFloat(fontSizeText.value);
    var objMax = parseFloat(fontSizeText.max);
    var objMin = parseFloat(fontSizeText.min);
    var objPercent = (objVal-objMin) / (objMax-objMin) * 100
    changeSliders(fontSizeText, objPercent, 'FontSizeText-value')
    ipcRenderer.send('fontSizeText-changed',[objVal, objPercent])
}
// 来源文字大小变更
function changeFontSizeFrom () {
    var objVal = parseFloat(fontSizeFrom.value);
    var objMax = parseFloat(fontSizeFrom.max);
    var objMin = parseFloat(fontSizeFrom.min);
    var objPercent = (objVal-objMin) / (objMax-objMin) * 100
    changeSliders(fontSizeFrom, objPercent, 'FontSizeFrom-value')
    ipcRenderer.send('fontSizeFrom-changed',[objVal, objPercent])
}
// 滑动按钮控制 - Minimize
function on_off_Minimize(){
    var text = btnMinimize.children[1];
    if(text.innerText==="ON"){
        btnOffMinimize()
    } else {
        btnOnMinimize()
    }
    // 发送变动数据
    ipcRenderer.send('btn-changed-minimize')
}
// 滑动按钮控制 - OpenAtStart
function on_off_OpenAtStart(){
    var text = btnOpenAtStart.children[1];
    if(text.innerText==="ON"){
        btnOffOpenAtStart()
    } else {
        btnOnOpenAtStart()
    }
}
//////////////////////////////////////////////////////////
//                  按钮组件状态调整函数                   //
//////////////////////////////////////////////////////////
// 滑动按钮打开 - XYWH
function btnOnXYWH () {
    btnOn(btnXYWH)
    // 数据存储
    store.set('Appearance.SaveXYWH.isSave', true);
    // 开启内容显示
    xywhManage.forEach((taskEl) => {
        taskEl.classList.add('xywh-active')
    })
    // 接收窗口数据
    showXYWH()
}
// 滑动按钮关闭 - XYWH
function btnOffXYWH () {
    btnOff(btnXYWH)
    // 数据存储
    store.set('Appearance.SaveXYWH.isSave', false);
    // 关闭内容显示
    xywhManage.forEach((taskEl) => {
        taskEl.classList.remove('xywh-active')
    })
}
// 滑动按钮打开 - FontSize
function btnOnFontSize () {
    showFontSize()
    btnOn(btnFontSize)
    // 数据存储
    store.set('Appearance.FontSize.isSetSize', true);
    // 开启内容显示
    fontSizeManage.forEach((taskEl) => {
        taskEl.classList.add('fontSize-active')
    })
}
// 滑动按钮关闭 - FontSize
function btnOffFontSize () {
    btnOff(btnFontSize)
    // 数据存储
    store.set('Appearance.FontSize.isSetSize', false);
    // 关闭内容显示
    fontSizeManage.forEach((taskEl) => {
        taskEl.classList.remove('fontSize-active')
    })
}
// 滑动按钮打开 - Minimize
function btnOnMinimize () {
    btnOn(btnMinimize)
    // 数据存储
    store.set('Other.ifMinimize', true);
}
// 滑动按钮关闭 - Minimize
function btnOffMinimize () {
    btnOff(btnMinimize)
    // 数据存储
    store.set('Other.ifMinimize', false);
}
// 滑动按钮打开 - OpenAtStart
function btnOnOpenAtStart () {
    btnOn(btnOpenAtStart)
    // 数据存储
    store.set('Other.ifOpenAtStart', true);
}
// 滑动按钮关闭 - OpenAtStart
function btnOffOpenAtStart () {
    btnOff(btnOpenAtStart)
    // 数据存储
    store.set('Other.ifOpenAtStart', false);
}

// 显示窗口数据 - XYWH
function showXYWH () {
    const xyValue = document.querySelector('.xyValue')
    const whValue = document.querySelector('.whValue')
    xyValue.innerText = "位置： " + store.get('Appearance.SaveXYWH.X') + "，" + store.get('Appearance.SaveXYWH.Y')
    whValue.innerText = "大小： " + store.get('Appearance.SaveXYWH.W') + "，" + store.get('Appearance.SaveXYWH.H')
    ipcRenderer.on('xy', (event, arg) => {
        xyValue.innerText = "位置： " + arg[0] + "，" + arg[1]
    })
    ipcRenderer.on('wh', (event, arg) => {
        whValue.innerText = "大小： " + arg[0] + "，" + arg[1]
    })
}

// 显示文字大小控制条
function showFontSize () {
    initFontSizeTitle()
    initFontSizeText()
    initFontSizeFrom()
}