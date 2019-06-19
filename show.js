const fs = require('fs');
module.exports = function showit(text) {
    fs.readFileSync('text.json', (err, file) => {
        if (err) return text(err);
        let t = json.parse(file);
        text(t);
    });
    }