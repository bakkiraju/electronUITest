const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const app = electron.app
const globalShortcut = electron.globalShortcut


app.on('ready', function() {
   var mainWindow = new BrowserWindow({
      //backgroundColor: '#ababab',
       show   : true,
      //  'node-integration': true,
       transparent: false,
       frame  : false,
       width  : 1000,
       height : 200,
       x:1280,
       y:0
   });

   mainWindow.loadURL('file://'+__dirname + '/index.html');

   ipcMain.on('make-transparent',(event,arg)=>{
      mainWindow.transparent = true;
      mainWindow.backgroundColor = null
      mainWindow.webContents.send('done',1);
   });

});
