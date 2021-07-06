const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.

  var display = true;
  if (process.platform == 'darwin') {
    display = false
  }

  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 1000,
    minHeight: 400,
    titleBarStyle: 'hiddenInset',
    frame: display,
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    }
  })

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})