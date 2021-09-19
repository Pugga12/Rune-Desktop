const { app, BrowserWindow } = require('electron')
const path = require('path')
if (require('electron-squirrel-startup')) return app.quit();
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {}
  })
  mainWindow.loadFile('index.html')

}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})