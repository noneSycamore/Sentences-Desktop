const { ipcRenderer } = require('electron')
const settingBtn = document.getElementById('setting')
const nextBtn = document.getElementById('next')
const allItems = document.getElementById('app')

settingBtn.addEventListener('click', () => {
    ipcRenderer.send('openSetting')
})

nextBtn.addEventListener('click', () => {
    ipcRenderer.send('next')
})

// allItems.addEventListener("mousemove", event => {
//     let flag = event.target === document.documentElement;
//     ipcRenderer.send('penetration', flag)
// });

const data = { data: "fetch" };
fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto_text = document.querySelector('#hitokoto_text')
        const hitokoto_from = document.querySelector('#hitokoto_from')
        hitokoto_text.href = `https://hitokoto.cn/?uuid=${data.uuid}`
        hitokoto_text.innerText = data.hitokoto
        hitokoto_from.innerText = data.from
        ipcRenderer.send('change-H', [allItems.offsetHeight])
    })
    .catch(console.error)

ipcRenderer.on('send-H', () => { 
    ipcRenderer.send('change-H', [allItems.offsetWidth,allItems.offsetHeight])
})

