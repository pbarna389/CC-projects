const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('../frontend'));
app.use(express.static('../frontend/upload'));

app.use(fileUpload());

app.get("/", (req, res) =>
    res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
);

app.get('/data', (req, res) => {
    res.sendFile(path.join(`${__dirname}/data/images.json`));
});

app.post("/upload", (req, res) => {
    console.log(req.body);
    console.log(req.files);

    const image = req.files.image;

    const uploadPath = __dirname + "/../frontend/upload/" + `${image.name}`;

    if (req.files) {
        image.mv(uploadPath, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            };
        });
    };

    const fileUploadPath = `${__dirname}/../backend/data/images.json`;

    fs.readFile(fileUploadPath, (error, data) => {

        if (error) console.log(error);

        const dataJSON = JSON.parse(data);

        let newPaint = { "id": dataJSON.length + 1, "painterName": req.body.author, "title": req.body.title, "fileName": image.name };

        dataJSON.push(newPaint);

        const fileDataString = JSON.stringify(dataJSON, null, 4);

        fs.writeFile(fileUploadPath, fileDataString, (err) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            };
        });
    })
    return res.send();
});

app.delete('/', (req, res) => {
    const fileName = req.body.title
    console.log(req.body.title)
    const dir = `${__dirname}/../frontend/upload`
    console.log(dir)

    async function readDir(dir, arr) {
        const fileNames = await fs.promises.readdir(dir)

        for (const file of fileNames) {
            if (file === fileName) {
                fs.unlink(`${dir}/${file}`, err => {
                    if (err) console.log(err)

                    console.log("File ${dir}/${file} got deleted!")
                })
            }
        }
    }

    const fileUpload = `${__dirname}/../backend/data/images.json`;
    fs.readFile(fileUpload, (err, data) => {
        if (err) console.log(err);

        const dataJSON = JSON.parse(data);
        let newData = [];
        dataJSON.forEach((element, index) => {
            if (element.fileName === fileName) {
                console.log(element);
                index > newData.length && !newData.includes(element) ? newData = dataJSON.slice(0, index + 1) : element = element;
                newData.pop();

            }
        });
        const restElements = dataJSON.slice(newData.length + 1)
        const newDataConcat = newData.concat(restElements);
        const ids = newDataConcat.map((element, index) => element.id = index + 1);

        const newDataJSON = JSON.stringify(newDataConcat, null, 4);

        fs.writeFile(fileUpload, newDataJSON, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send
            }
        })
    })

    readDir(dir);
    res.status(200).send
})

app.listen(port, () => {
    console.log(`127.0.0.1:${port}`);
});