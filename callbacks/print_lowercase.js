var getHTML = require('../http-functions5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'

};

function toLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, toLowerCase);

sytantris.github.io/http-examples/step6/lowercase.html