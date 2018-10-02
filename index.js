var express = require('express');
var app = express();
var fs = require('fs');

app.listen(3000, () => {
    console.log('server start.');
});

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Context-Type': 'text/html'});
        res.end(data);
    });
});