const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
  
function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
        //skipTaskbar: true,
        //toolbar: false
        /*resizeable: false,
        frame: false*/
    })

    win.once('ready-to-show', () => {
        win.show()
    })

    win.setMenu(null);

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'ui', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    
    //win.webContents.openDevTools()
  
    win.on('closed', () => {
      win = null
    })
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

app.on('ready', createWindow)