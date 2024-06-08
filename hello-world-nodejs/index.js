var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function(req, res) {
    res.send("<p>Hello, World!</p>")
})
expressapp.listen(5200, function () {
    console.log('Ready on port 5200!')
})

process.on('SIGINT', function () {
    process.exit();
})
