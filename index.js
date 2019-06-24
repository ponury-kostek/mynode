"use strict";
const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;
const load_fortunes = require("./load_fortunes");
load_fortunes((err, fortunes) => {
	if (err) {
		console.error(err);
		return;
	}
	let counter = 0;
	const fortunes_length = fortunes.length;
	const server = http.createServer((req, res) => {
		// verify request method (allow GET only)
		if (req.method !== "GET") {
			res.statusCode = 405;
			res.setHeader("Allow", "GET");
			return res.end();
		}
		// verify request url (allow "/" only)
		if(req.url !== "/") {
			res.statusCode = 404;
			return res.end();
		}
		counter += 1;
		const fortune = fortunes[counter % fortunes_length];
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.end(`<dl><dt>${fortune.text}</dt><dd> -- ${fortune.author || "&lt;autor nie znany&gt;"}</dd></dl>`);
	});
	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	});
});
