const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;

const fs = require('fs');
function getFile(c) {
    fs.readFile('text.json', (err, data)=> {
        if (err) return c(err)
        let text = JSON.parse(data);
        c(null, text);
    })

}
let tmp;
let i = 0;
getFile(function(error, data) {
    tmp = data;
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
})
const server = http.createServer((req, res) => {
    if(i == 3) i = 0;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(i);
    var ress = Buffer.from(tmp[i++].tekst, 'ascii');
    res.end(ress.toString('utf8'));
});
