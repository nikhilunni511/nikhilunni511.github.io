var express = require('express');
var app = express();
var http = require('http').Server(app);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
var fs = require('fs');


 

 
fs.readdir(__dirname+'/storage/downloads/movies', function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});

// app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.sendFile(path.join(__dirname, './', 'server.html'));
})
// app.get('/:id/download', function (req, res, next) {
//     var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
//     var fileName = "report.pdf"; // The default name the browser will use

//     res.download(filePath, fileName);    
// });
http.listen('3000', () => {
    console.log("Server running on port 3000");
})