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
    var html = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    * {
    box-sizing: border-box;
    }

    #myInput {
    background-image: url('/css/searchicon.png');
    background-position: 10px 12px;
    background-repeat: no-repeat;
    width: 100%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
    }

    #myUL {
    list-style-type: none;
    padding: 0;
    margin: 0;
    }

    #myUL li a {
    border: 1px solid #ddd;
    margin-top: -1px; /* Prevent double borders */
    background-color: #f6f6f6;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block
    }

    #myUL li a:hover:not(.header) {
    background-color: #eee;
    }
    </style>
    </head>
    <body>

    <h2>My Movies</h2>

    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
    <ul id="myUL">`;
    fs.readdir(__dirname+'/storage/downloads/movies', function (err, items) {
        if(err)
        res.end('Server not responding');
        for (var i = 0; i < items.length; i++) {
            html += `<li><a href="/download?id=${items[i]}">${items[i]}  </a></li>`
        }
        html += `
        </ul>

    <script>
    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    </script>

    </body>
    </html>`
        res.end(html);
    });

    // res.end(html);
})
app.get('/download', function (req, res) {
    const file = `${__dirname}/storage/downloads/movies/${req.query.id}`;
    res.download(file); // Set disposition and send it.
});
// app.get('/:id/download', function (req, res, next) {
//     var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
//     var fileName = "report.pdf"; // The default name the browser will use

//     res.download(filePath, fileName);    
// });
app.get('*', (req, res) => {
    res.end('Welcome to the beginning of nothingness');
})
http.listen('3000', () => {
    console.log("Server running on port 3000");
})
