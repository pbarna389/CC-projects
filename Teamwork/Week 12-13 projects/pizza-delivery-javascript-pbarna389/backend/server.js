const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/orderData", express.static(path.join(`${__dirname}/Orders`)));
app.use("/public", express.static(path.join(`${__dirname}/../frontend/public`)));
app.use("/admin", express.static(path.join(`${__dirname}/../frontend/public/admin`)));
app.use("/public/img/", express.static(path.join(`${__dirname}/../frontend/public/img/pizzaImgs`)));
app.use("/orders", express.static(path.join(`${__dirname}/../frontend/public/orders`)));

app.get("/", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
});

app.get("/admin", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/public/admin/admin.html`))
});

app.get("/adminRemove", (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/public/admin/admin.html`))
});

app.get('/pizza', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/public/pizza.json`));
});

app.get('/pizzaModify', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/public/pizza.json`));
});

app.get('/orders', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/public/orders/orders.html`))
})

const imageFolder = `${__dirname}/../frontend/public/img/pizzaImgs`;

async function deleteEndPointsForImages(dir) {
	const fileNames = await fs.promises.readdir(dir);

	for (const file of fileNames) {
		app.delete(`/public/img/pizzaImgs/${file}`, (req, res) => {
			fs.unlink(`${imageFolder}/${file}`, err => {
				if (err) console.log(err);

				console.log(`File ${imageFolder}/${file} got deleted!`)
			});
		});
	};
};

deleteEndPointsForImages(imageFolder);

app.get('/ordersAdmin', (req, res) => {
	res.header("Content-Type", 'application/json');
	const dir = `${__dirname}/../backend/Orders`;

	async function readDir(dir, arr) {
		const fileNames = await fs.promises.readdir(dir);

		for (const file of fileNames) {
			const absPath = path.join(dir, file);
			console.log(absPath, file);

			const data = await fs.promises.readFile(absPath);
			const newData = await JSON.parse(data);

			// console.log(newData[newData.length - 1])
			arr.push(JSON.parse(data));
		};

		res.send(arr);

	};

	let result = [];
	readDir(dir, result);

});

app.post('/ordersAdmin', (req, res) => {
	const newData = JSON.parse(JSON.stringify(req.body));
	const fileUpload = `${__dirname}/orders/${newData.fileName}`;
	console.log(fileUpload);
	console.log(newData);

	fs.readFile(fileUpload, (err, data) => {
		if (err) console.log(err);

		const dataJSON = JSON.parse(data);

		dataJSON[dataJSON.length - 1].status = newData.status
		// console.log(dataJSON[dataJSON.length - 1].status)

		const newOrderFile = JSON.stringify(dataJSON, null, 4);

		fs.writeFile(fileUpload, newOrderFile, (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).send(err)
			};
		});
		return res.send(newOrderFile);
	});
});

app.post("/", (req, res) => {
	// console.log(req.body);

	let prefix = "";
	let postfixTelephone = ""
	req.body.forEach(element => prefix = element.name);
	req.body.forEach(element => postfixTelephone = element.phone);

	const fileData = JSON.parse(JSON.stringify(req.body));

	fileData[fileData.length - 1]["fileName"] = `${prefix}Order${postfixTelephone}.json`;
	console.log(fileData);

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

app.post("/admin", (req, res) => {
	const fileUpload = `${__dirname}/../frontend/public/pizza.json`
	fs.readFile(fileUpload, (err, data) => {
		if (err) console.log(err);

		const image = req.files.picture;

		async function renameImages(dir) {
			const fileNames = await fs.promises.readdir(dir);
			console.log(fileNames, fileNames.length)

			if (fileNames.length >= 9) {
				image.name = `pizza0${fileNames.length + 1}.png`
			} else {
				image.name = `pizza00${fileNames.length + 1}.png`
			}

			const uploadPath = `${__dirname}/../frontend/public/img/pizzaImgs/${image.name}`;

			if (req.files) {
				image.mv(uploadPath, (err) => {
					if (err) {
						console.log(err);
					};
				});
			};
			const newData = req.body;

			const dataJSON = JSON.parse(data);

			const imageFolder = `${__dirname}/../frontend/public/img/pizzaImgs`;

			console.log(`image name = ${image.name}`)

			let newPizza = { "id": dataJSON.length + 1, "pizza_name": newData.pizza_name, "ingredients": newData.ingredients.split(","), "size": [28, 33], "price": Number(newData.price), "is_hidden": newData.hidden === "true" ? true : false, "category": newData.category.split(" ").join(" "), "image_url": image.name };

			// console.log(newPizza.is_hidden);

			dataJSON.push(newPizza);

			const newPizzaFile = JSON.stringify(dataJSON, null, 4);

			fs.writeFile(fileUpload, newPizzaFile, (err, data) => {
				if (err) {
					console.log(err);
					res.status(500).send(err)
				};
			});
			deleteEndPointsForImages(imageFolder)
		};
		renameImages(imageFolder);
	});
});

app.post("/pizza", (req, res) => {
	const fileUpload = `${__dirname}/../frontend/public/pizza.json`;
	const newFile = req.body;

	newFile.forEach((element, index) => element.id = index + 1);
	newFile.forEach((element, index) => index < 9 ? element.image_url = `pizza00${index + 1}.png` : element.image_url = `pizza0${index + 1}.png`);

	// console.log(newFile);

	const imageFolder = `${__dirname}/../frontend/public/img/pizzaImgs`;

	async function renameImages(dir) {
		const fileNames = await fs.promises.readdir(dir);

		for (const [index, file] of fileNames.entries()) {

			// console.log(file, index)
			if (index < 9) {
				fs.rename(`${dir}/${file}`, `${dir}/pizza00${index + 1}.png`, err => {
					if (err) console.log(err);

					console.log(`file ${file} renamed to /pizza00${index + 1}.png`)
				})

			} else {
				fs.rename(`${dir}/${file}`, `${dir}/pizza0${index + 1}.png`, err => {
					if (err) console.log(err);

					console.log(`file ${file} renamed to /pizza0${index + 1}.png`)
				});
			};
		};
	};

	renameImages(imageFolder)

	const newPizzaFile = JSON.stringify(newFile, null, 4);

	// console.log(newFile);
	fs.writeFile(fileUpload, newPizzaFile, (err, data) => {
		if (err) {
			console.log(err);
			res.status(500).send(err)
		};
	});
});

app.post("/pizzaModify", (req, res) => {
	const fileUpload = `${__dirname}/../frontend/public/pizza.json`;
	fs.readFile(fileUpload, (err, data) => {
		if (err) console.log(err)

		// console.log(req.body);

		const modifiedData = req.body;

		const dataJSON = JSON.parse(data);

		if (req.files) {

			const uploadPath = `${__dirname}/../frontend/public/img/pizzaImgs/${modifiedData.picture}`

			// console.log(req.files.newPicture);

			const image = req.files.newPicture;

			image.mv(uploadPath, (err) => {
				if (err) {
					console.log(err);
				};
			});
		};

		let modifiedPizza = { "id": modifiedData.pizza_id, "pizza_name": modifiedData.pizza_name, "ingredients": modifiedData.ingredients.split(","), "size": [28, 32], "price": Number(modifiedData.price), "is_hidden": modifiedData.hidden === "true" ? modifiedData.hidden = true : modifiedData.hidden = false, "category": modifiedData.category.split(" ").join(" "), "image_url": modifiedData.picture };

		let firstPartArr = ""
		dataJSON.forEach(element => Number(element.id) === Number(modifiedPizza.id) ? firstPartArr = dataJSON.splice(0, dataJSON.indexOf(element) + 1) : element = element);

		firstPartArr.pop();
		firstPartArr.push(modifiedPizza);

		newData = firstPartArr.concat(dataJSON);
		newDataJSON = JSON.stringify(newData, null, 4)

		fs.writeFile(fileUpload, newDataJSON, (err, data) => {
			if (err) {
				console.log(err);
				res.status(500).send(err)
			};
		});
	});
});

app.listen(9000, (_) => console.log("127.0.0.1:9000"));