"use strict";
var http = require('http'); // Import Node.js core module
var server = http.createServer(function (req, res) {
    if (req.url == '/') { //check the URL of the current request
        console.log('this is url', req.url);
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content    
        res.write("<html><body>\n      < p > This is home Page.< /p>\n      <p>second paragraph</p>\n      <p>third paragraph</p>\n      <p>forth paragraph</p>\n      <p>fifth paragraph</p>\n      </body></html >");
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});
server.listen(process.env.PORT || 5000); //6 - listen for any incoming requests
console.log('Node.js web server at port 5000 is running..');
