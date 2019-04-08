var https = require("https");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  /* Add your code here */
    https.get(options, function(response){
    response.setEncoding('utf8');

    let data = "";
    response.on('data', function(chunk){
      data += chunk;
      console.log(data);
    });
  });
}

getAndPrintHTML(requestOptions);
