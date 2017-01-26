const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const app = electron.app
const globalShortcut = electron.globalShortcut


app.on('ready', function() {
   var mainWindow = new BrowserWindow({
      //backgroundColor: '#ababab',
       show   : true,
       'node-integration': true,
       transparent: true,
       frame  : false,
       width  : 500,
       height : 400
   });

   mainWindow.loadURL('file://'+__dirname + '/index.html');
   
   ipcMain.on('make-transparent',(event,arg)=>{
      mainWindow.transparent = true;
      mainWindow.backgroundColor = null
      mainWindow.webContents.send('done',1);
   });

});
