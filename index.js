var express = require('express');
var app = express();
var fs = require('fs');
var collect = require('@turf/collect');
var buffer = require('@turf/buffer');
global.router = express.Router(); //라우터 객체 생성

var allowCORS = function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    (req.method === 'OPTIONS') ?
    res.send(200):
        next();
};

var _path = __dirname;
// 이 부분은 app.use(router) 전에 추가하도록 하자
app.use(allowCORS);
app.use("/", router);
router.get("/grid.js", function (req, res) {
    res.sendFile("/grid.js", {
        'root': _path
    });
});
router.get("/_index.js", function (req, res) {
    res.sendFile("/_index.js", {
        'root': _path
    });
});

app.listen(3000, () => {
    console.log('server start.');
});
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Context-Type': 'text/html'});
        res.end(data);
    });
});
