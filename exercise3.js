

// // while https is built-in to Node, it is a module, so it must be required
var https = require('https');



function getAndPrintHTMLChunks (options) {
  var chunks = '';

  https.get(options, function (response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    chunks += data;
  });
  response.on('end', function(){
    console.log(chunks);
  })
  });
}




getAndPrintHTMLChunks({
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
});


