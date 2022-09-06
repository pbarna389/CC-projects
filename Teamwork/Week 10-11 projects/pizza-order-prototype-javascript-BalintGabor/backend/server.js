const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/public", express.static(path.join(`${__dirname}/../frontend/public`)));

app.get("/", (req, res) =>
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
);

app.get('/pizza', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/public/pizza.json`));
});

app.post("/", (req, res) => {
	console.log(req.body);

	let prefix = "";
	let postfixTelephone = ""
	req.body.forEach(element => prefix = element.name);
	req.body.forEach(element => postfixTelephone = element.phone);

	const fileData = JSON.parse(JSON.stringify(req.body));
	const fileDataString = JSON.stringify(fileData, null, 2);
	const uploadPath = `${__dirname}/../backend/Orders/${prefix}Order${postfixTelephone}.json`;

	fs.writeFile(uploadPath, fileDataString, (err) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		};
	});
	return res.send(fileDataString);
});

app.listen(9000, (_) => console.log("127.0.0.1:9000"));