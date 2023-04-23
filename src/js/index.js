const { ipcRenderer } = require('electron')
const settingBtn = document.getElementById('setting')
const nextBtn = document.getElementById('next')
const allItems = document.getElementById('app')
const title_text = document.getElementById('title_text')
const content = document.getElementById('hitokoto_text')
const from = document.getElementById('hitokoto_from')

const Store = require('electron-store');
const store = new Store();

fetchHitokoto()

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
            eval(store.get('Other.ifCustomizationAPI.js'))
            // content.innerText = data.hitokoto
            // from.innerText =  data.from + (data.from_who ? ' · ' + data.from_who : '')
            
            // content.innerText = data.data.content
            // from.innerText = '《' + data.data.origin.title + '》 ' + data.data.origin.dynasty + ' · ' + data.data.origin.author
            ipcRenderer.send('change-H', [allItems.offsetHeight+4, 'onlyH'])
        })
        .catch(console.error)
}
