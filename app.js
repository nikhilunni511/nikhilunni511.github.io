var express = require('express');
var app = express();
var http = require('http').Server(app);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
var fs = require('fs');


 

 
// fs.readdir(__dirname+'/storage/downloads/movies', function(err, items) {
//     console.log(items);
 
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });


app.get('/', (req, res) => {
    res.setHeader("Content-type", "text/html");
    var html = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        `;
        fs.readdir(__dirname+'/storage/downloads/movies', function(err, items) {
            console.log(items);
         
            for (var i=0; i<items.length; i++) {
                console.log(typeof items[i]);
                html+=`<a href="/download?id=${items[i]}">${items[i]}  </a><br /><br />`
            }
            html += `<p>Welcome</p>
    </body>
    </html>`
    res.end(html);
        });
    
    // res.end(html);
})
app.get('/download', function(req, res){
    const file = `${__dirname}/storage/downloads/movies/${req.query.id}`;
    res.download(file); // Set disposition and send it.
  });
// app.get('/:id/download', function (req, res, next) {
//     var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
//     var fileName = "report.pdf"; // The default name the browser will use

//     res.download(filePath, fileName);    
// });
http.listen('3000', () => {
    console.log("Server running on port 3000");
})
