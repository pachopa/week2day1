var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {

  var results = html.toLowerCase(html);
  console.log(results);
  return results;

}

getHTML(requestOptions, printUpperCase);
