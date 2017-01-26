const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const app = electron.app
const globalShortcut = electron.globalShortcut


app.on('ready', function() {
   var prefsWindow = new BrowserWindow({
       width  : 400,
       height : 300,
       show   : true,
       frame  : false,
       backgroundColor: '#ababab'
   });

   prefsWindow.loadURL('file://'+__dirname + '/index.html');
});
