var https = require("https");

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

 /* Add your code here */

  https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    let data = "";
    response.on('data', function(chunk){
      data += chunk;
      console.log("Chunks: " + chunk + '\n');
    });
  });
}

getAndPrintHTML();