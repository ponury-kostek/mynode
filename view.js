const fs = require('fs');
module.exports = function f() {
    let wy = fs.exists('text.json', (exists) => {
        if(exists) {
            return "jest";
        } else {
            return "nie ma";
        }
    });
    return wy;
}
