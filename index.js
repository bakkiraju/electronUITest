var net = require('net');

var {ipcRenderer, remote} = require('electron');

var $ = require('jquery');
var Slider = require('bootstrap-slider');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();

//$(".app1").bind('animationend', function() { remote.getCurrentWindow().hide(); } );

// ipcRenderer.on('done',(event, arg) =>{
//   console.log("changing the class");
//   var elem = $(".app").attr('class','app1');
//   var x = document.querySelector(".app1");
//
//   // Code for Chrome, Safari and Opera
//   x.addEventListener("animationend", (e)=>{
//     remote.getCurrentWindow().hide();
//   }, false);
// });


postSliderChange = function() {
  
}
var sliderPos = $('#travaProxy').slider()
		.on('slide', postSliderChange)
		.data('slider');

connectToUIEngine = ()=> {
  client.connect(PORT, HOST, function() {
      console.log('CONNECTED TO: ' + HOST + ':' + PORT);
  });
};

stressTest = () => {
  for (i=0;i< 10; i++) {
    showOverlay1();
    closeOverlay1();

    // showOverlay1();
    // fadeOutOverlay1();
    //
    // showOverlay2();
    // closeOverlay1();
    //
    // showOverlay2();
    // fadeOutOverlay1();
  }
}

showOverlay1 = ()=> {
    console.log("Sending message to show overlay type1");

    jsonInput = {
     RenderingOptions: {
            RenderType: "Electron",
            RenderStyle: "MultiTab",
            size: {
              height: 300,
              width : 400
            },
            position: {
                top: 278,
                left: 520
            },
            ToolOptions: [
                {
                   optName: "hg",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-hourglass",
                   optValue:10
                },
                {
                   optName: "Publish",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-publish",
                   optValue:15
                },
                {
                   optName: "ld",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-light-down",
                   optValue:11
                }
              ],
            RenderFile:"prefs.html"
    }
  };

   client.write(JSON.stringify(jsonInput));
};

showOverlay2 = ()=> {
    console.log("Sending message to show overlay type1");

    jsonInput = {
     RenderingOptions: {
            RenderType: "Electron",
            RenderStyle: "MultiTab",
            size: {
              height: 300,
              width : 400
            },
            position: {
                top: 278,
                left: 520
            },
            ToolOptions: [
                {
                   optName: "Brush",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-brush",
                   optValue:10
                },
                {
                   optName: "Brush",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-star",
                   optValue:15
                },
                {
                   optName: "Brush",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-light-up",
                   optValue:11
                }
              ],
            RenderFile:"prefs.html"
    }
  };

   client.write(JSON.stringify(jsonInput));
};


showCircularOverlay1 = ()=> {
    console.log("Sending message to show overlay type1");

    jsonInput = {
     RenderingOptions: {
            RenderType: "Electron",
            RenderStyle: "Circular",
            size: {
              height: 400,
              width : 400
            },
            position: {
                top: 278,
                left: 520
            },
            ToolOptions: [
                {
                   optName: "Brush",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-brush",
                   optValue:10
                },
                {
                   optName: "Brush",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-star",
                   optValue:15
                },
                {
                   optName: "Brush",
                   optSymbolType: "icon",
                   optSymbolValue:"icon-light-up",
                   optValue:11
                }
              ],
            RenderFile:"prefs.html"
    }
  };

   client.write(JSON.stringify(jsonInput));
};


closeOverlay1 = ()=> {
    console.log("Sending message to close overlay type1");

    jsonInput = {
     RenderingOptions: {
            RenderType: "Electron",
            Command:"close"
    }
  };

   client.write(JSON.stringify(jsonInput));
};

fadeOutOverlay1 = () => {
  console.log("Sending message to fade out the overlay");
  jsonInput = {
   RenderingOptions: {
          RenderType: "Electron",
          Command:"fade-out"
  }
};

 client.write(JSON.stringify(jsonInput));
  //ipcRenderer.send('make-transparent');
}

simualteTap = () => {
  console.log("Sending message to fade out the overlay");
  jsonInput = {
   RenderingOptions: {
          RenderType: "Electron",
          Command:"tap"
  }
};

 client.write(JSON.stringify(jsonInput));
  //ipcRenderer.send('make-transparent');
}

simulateValueUp = () => {
  console.log("Sending message to fade out the overlay");
  jsonInput = {
   RenderingOptions: {
          RenderType: "Electron",
          Command:"fade-out"
  }
};

 client.write(JSON.stringify(jsonInput));
  //ipcRenderer.send('make-transparent');
}


simulateValueDown = () => {
  console.log("Sending message to fade out the overlay");
  jsonInput = {
   RenderingOptions: {
          RenderType: "Electron",
          Command:"fade-out"
  }
};

 client.write(JSON.stringify(jsonInput));
  //ipcRenderer.send('make-transparent');
}

// data is what the server sent to this socket
client.on('data', function(data) {
    console.log('Received DATA: ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});
