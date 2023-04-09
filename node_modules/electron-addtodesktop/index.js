const bindings = require("bindings")("electron-addtoDesktop");

const addtoDesktop = () => {
    /**
     * Set window to desktop: 
     * -WorkerW
     * --Your Window
     * --SHELLDLL_DefView
     * -Progman
     **/
    const attach = (win) => {
        if (win === undefined) throw Error("You need to pass a window");

        if (typeof win.getNativeWindowHandle !== "function") throw Error("You need to pass a window of type Electron.BrowserWindow");

        bindings.attach(win.getNativeWindowHandle());
    };

    /**
     * Remove window from desktop
     **/
    const detach = (win) => {
        if (win === undefined) throw Error("You need to pass a window");
        
        if (typeof win.getNativeWindowHandle !== "function") throw Error("You need too pass a window of type Electron.BrowserWindow");
        
        bindings.detach(win.getNativeWindowHandle());
    };

    return {
        attach,
        detach
    };
}

module.exports = addtoDesktop();