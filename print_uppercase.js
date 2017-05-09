var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  var results = html.toUpperCase(html);
  console.log(results);
  return results;

}

getHTML(requestOptions, printUpperCase);




// var func = require('./http-functions.js');

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step5.html'
// };

// function printHTML(html) {
//   console.log(html);
// }

// func(requestOptions, printHTML);


// String upper = input.toUpperCase(); //stores "CRICKET!"