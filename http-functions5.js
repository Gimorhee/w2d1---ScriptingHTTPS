var https = require("https");

module.exports = function getHTML (options, callback) {
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
};



