var getHTML = require('../http-functions5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

let splitWords = html.split(' ');

  for (let i = 0 ; i < splitWords.length ; i++){
    if(splitWords[i].includes('a')){
      splitWords[i].replace(/a/gi, '4');
    }
  }

  console.log(splitWords);
}

getHTML(requestOptions, print1337);

