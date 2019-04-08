var getHTML = require('../http-functions5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverseCase (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, reverseCase);