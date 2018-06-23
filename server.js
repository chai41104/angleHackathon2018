var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();

var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(8008);
console.log("Server Started at: https://127.0.0.1:8008");

app.use(express.static('public'))

var serve = serveStatic('./', {'index': ['index.html', 'index.htm']})

// Create server
var server = https.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})
