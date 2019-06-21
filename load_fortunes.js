"use strict";
const fs = require("fs");
module.exports = function load_fortunes(callback) {
	fs.readFile("./fortunes.json", (err, json) => {
		if (err) {
			return callback(err);
		}
		try {
			let fortunes = JSON.parse(json);
			callback(null, fortunes);
		} catch (err) {
			callback(err);
		}
	});
};