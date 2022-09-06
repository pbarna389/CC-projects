const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());
app.use(fileUpload());

app.get("/", (req, res) =>
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
);

app.use("/public", express.static(`${__dirname}/../frontend/public`));

app.get("/profilepic", (req, res) =>
	res.sendFile(path.join(`${__dirname}/../backend/data/profile.jpg`))
);

app.get("/placeholder", (req, res) =>
	res.sendFile(path.join(`${__dirname}/../backend/data/placeholder.jpg`))
);

app.get("/profile", (req, res) =>
	res.sendFile(path.join(`${__dirname}/../backend/data/profile.json`))
);

app.post("/", (req, res) => {
	const fileData = JSON.parse(JSON.stringify(req.body));
	// fileData.picture = "/profile.jpg";
	const fileDataString = JSON.stringify(fileData, null, 2);
	const uploadPath = __dirname + "/../backend/data/" + "profile.json";

	fs.writeFile(uploadPath, fileDataString, (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		};
		return res.send(fileDataString);
	});
});

app.post("/profilepic", (req, res) => {
	const pictureUploadPath = __dirname + "/../backend/data/" + "profile.jpg";

	console.log(req.files)

	if (req.files) {
		const uploadedPicture = req.files.picture;
		console.log(req.files.picture)
		uploadedPicture.mv(pictureUploadPath, (err) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			};
		});
	}
})

app.delete("/profilepic", (req, res) => {
	const pictureUploadPath = __dirname + "/../backend/data/" + "profile.jpg";
	const placeHolderPickUploadPath = `${__dirname}/../backend/data/placeholder.jpg`

	if (pictureUploadPath) {
		fs.copyFile(placeHolderPickUploadPath, pictureUploadPath, (err) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
		});

		console.log('copy complete');
	}

	return res.status(200).send("done");
})

app.delete("/", (req, res) => {
	const uploadPath = __dirname + "/../backend/data/" + "profile.json";
	const emptyDataPath = `${__dirname}/../backend/data/emptyData.json`


	if (uploadPath) {
		fs.copyFile(emptyDataPath, uploadPath, (err) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
		});
	};

	return res.status(200).send("done");
});

app.listen(9000, (_) => console.log("127.0.0.1:9000"));
