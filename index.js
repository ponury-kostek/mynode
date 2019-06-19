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
getFile(function(error, data) {
    tmp = data;
    console.log(tmp);
})
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(tmp[0].tekst.buffer.toString('utf8'));

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
