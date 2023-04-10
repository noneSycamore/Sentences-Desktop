# electron-addtodesktop

Add electron window to Desktop( Only Windows )

For certain considerations, I place the window here:
- -WorkerW
- --Your Window *
- --SHELLDLL_DefView
- -Progman

This will obscure the icons, but will respond to mouse events. 

If you want to set the window as wallpaper, it is recommended to use [electron-as-wallpaper](https://github.com/meslzy/electron-as-wallpaper) or [electron-wallpaper](https://github.com/robinwassen/electron-wallpaper)

## Installation

`npm install electron-addtodesktop --save`

## Usage
```javascript
const {attach, detach} = require("electron-addtodesktop");

attach(win);
detach(win);

```
