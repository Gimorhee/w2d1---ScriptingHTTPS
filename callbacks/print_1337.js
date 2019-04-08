var getHTML = require('../http-functions5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

let splitWords = html.toLowerCase();

if(splitWords.includes('er') && splitWords.includes('e')){
  splitWords = splitWords.replace(/er/gi, '0r');
}

if(splitWords.includes('ck')) {
  splitWords = splitWords.replace(/ck/gi, 'x');
}

if(splitWords.includes('you') && splitWords.includes('o')){
  splitWords = splitWords.replace(/you/gi, 'j00');
}

splitWords = splitWords.replace(/a/gi, '4');
splitWords = splitWords.replace(/e/gi, '3');
splitWords = splitWords.replace(/l/gi, '1');
splitWords = splitWords.replace(/o/gi, '0');
splitWords = splitWords.replace(/s/gi, '5');
splitWords = splitWords.replace(/t/gi, '7');

  console.log(splitWords);
}

getHTML(requestOptions, print1337);

