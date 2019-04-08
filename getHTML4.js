var https = require("https");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

  /* Add your code here */
  https.get(options, function(response){
    response.setEncoding('utf8');

    let data = "";
    response.on('data', function(chunk){
      data += chunk;
    });

    response.on('end', function(){
      callback(data);
    });

  });
}

getHTML(requestOptions, printHTML);