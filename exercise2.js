

// // while https is built-in to Node, it is a module, so it must be required
var https = require('https');



function getAndPrintHTMLChunks () {
  var chunks = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function (response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    chunks += data;
  });
  response.on('end', function(){
    console.log(chunks);
  })
  });
}




getAndPrintHTMLChunks();

