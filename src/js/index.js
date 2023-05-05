const { ipcRenderer } = require('electron')
const settingBtn = document.getElementById('setting')
const nextBtn = document.getElementById('next')
const allItems = document.getElementById('app')
const title_text = document.getElementById('title_text')
const content = document.getElementById('hitokoto_text')
const from = document.getElementById('hitokoto_from')

const Store = require('electron-store');
const store = new Store();

// init
content.innerText = store.get('LastData.text')
from.innerText = store.get('LastData.from')
fetchHitokoto()
userTransparency = store.get('Appearance.Transparency.value') / 100
allItems.style.backgroundColor = `rgba(0, 0, 0, ${userTransparency})`
userCurvature = store.get('Appearance.Curvature.value') * 6
allItems.style.borderRadius = `${userCurvature}px`;
userFontSizeTitle = store.get('Appearance.FontSize.fontSizeTitle.value')
userFontSizeText = store.get('Appearance.FontSize.fontSizeText.value')
userFontSizeFrom = store.get('Appearance.FontSize.fontSizeFrom.value')
content.style.fontSize = `${userFontSizeText}px`;
from.style.fontSize = `${userFontSizeFrom}px`;
title_text.style.fontSize = `${userFontSizeTitle}px`;
document.body.style.setProperty('--color', 'ivory');

settingBtn.addEventListener('click', () => {
    ipcRenderer.send('openSetting')
})

// 获取下一个一言
nextBtn.addEventListener('click', () => {
    fetchHitokoto()
})

// allItems.addEventListener("mousemove", event => {
//     let flag = event.target === document.documentElement;
//     ipcRenderer.send('penetration', flag)
// });

ipcRenderer.on('send-H', (event, arg) => { 
    if (arg === 'onlyH') {
        ipcRenderer.send('change-H', [allItems.offsetHeight+4,'onlyH'])
    }
    else {
        ipcRenderer.send('change-H', [allItems.offsetWidth,allItems.offsetHeight+4])
    }
})

function fetchHitokoto () {
    const data = { data: "fetch" };
    var RightClickData = store.get('RightClick')
    var Types = ''
    for (let key in RightClickData) { 
        if (RightClickData[key]) {
            Types = Types + `c=${key}&`
        }
    }
    if (Types !== '') {
        Types = '?' + Types.slice(0,-1)
    }

    eval("fetch(`" + store.get('Other.ifCustomizationAPI.https') + "`)")
    // fetch(`https://v1.hitokoto.cn/${Types}`)
    // fetch(`https://v2.jinrishici.com/sentence`)
        .then(response => response.json())
        .then(data => {
            document.body.style.setProperty('--color', 'ivory');
            eval(store.get('Other.ifCustomizationAPI.js'))
            // content.innerText = data.hitokoto
            // from.innerText =  data.from + (data.from_who ? ' · ' + data.from_who : '')
            
            // content.innerText = data.data.content
            // from.innerText = '《' + data.data.origin.title + '》 ' + data.data.origin.dynasty + ' · ' + data.data.origin.author
            ipcRenderer.send('change-H', [allItems.offsetHeight+4, 'onlyH'])
        })
        .catch(error => document.body.style.setProperty('--color', '#c95862'))
}
