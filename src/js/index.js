const { ipcRenderer } = require('electron')
const settingBtn = document.getElementById('setting')
const nextBtn = document.getElementById('next')
const allItems = document.getElementById('app')
const title_text = document.getElementById('title_text')
const hitokoto_text = document.getElementById('hitokoto_text')
const hitokoto_from = document.getElementById('hitokoto_from')

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
        console.log(allItems.offsetWidth,'onlyH')
        ipcRenderer.send('change-H', [allItems.offsetWidth,'onlyH'])
    }
    else {
        console.log(allItems.offsetWidth, allItems.offsetHeight)
        ipcRenderer.send('change-H', [allItems.offsetWidth,allItems.offsetHeight])
    }
})

function fetchHitokoto() {
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

    fetch(`https://v1.hitokoto.cn/${Types}`)
        .then(response => response.json())
        .then(data => {
            console.log(Types)
            hitokoto_text.innerText = data.hitokoto
            if (data.from_who) {
                hitokoto_from.innerText = data.from + ' · ' + data.from_who
            }
            else {
                hitokoto_from.innerText = data.from
            }
            ipcRenderer.send('change-H', [allItems.offsetHeight, 'onlyH'])
        })
        .catch(console.error)
}
