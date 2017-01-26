var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();

connectToUIEngine = ()=> {
  client.connect(PORT, HOST, function() {
      console.log('CONNECTED TO: ' + HOST + ':' + PORT);
  });
};

showOverlay1 = ()=> {
    console.log("Sending message to show overlay type1");

    jsonInput = {
     RenderingOptions: {
            RenderType: "Electron",
            size: {
              height: 300,
              width : 400
            },
            position: {
                top: 278,
                left: 520
            },
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


// data is what the server sent to this socket
client.on('data', function(data) {
    console.log('Received DATA: ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});
