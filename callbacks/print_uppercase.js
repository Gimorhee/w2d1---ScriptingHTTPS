var getHTML = require('../http-functions5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function toUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, toUpperCase);