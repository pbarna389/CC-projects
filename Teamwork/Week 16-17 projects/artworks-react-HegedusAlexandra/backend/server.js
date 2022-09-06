const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/profiles', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.sendFile(path.join(`${__dirname}/profiles/profiles.json`))
})

app.use(cors());

app.post('/login', (req, res) => {
    const users = `${__dirname}/profiles/profiles.json`;
    console.log(users);
    fs.readFile(users, "utf-8", (err, data) => {
        const dataJSON = JSON.parse(data);
        const incomingData = JSON.parse(JSON.stringify(req.body));
        dataJSON.forEach(element => {
            element.creditentials.userName === incomingData.userName && element.creditentials.password === incomingData.password &&
                res.send({
                    token: 'test425'
                })
        })
    })
});

app.post('/registration', (req, res) => {
    const users = `${__dirname}/profiles/profiles.json`;

    fs.readFile(users, "utf-8", (err, data) => {
        const dataJSON = JSON.parse(data);
        const incomingData = JSON.parse(JSON.stringify(req.body));

        // dataJSON.push(incomingData);
        // console.log(incomingData.creditentials);
        let thereIsADuplicate = false;

        dataJSON.forEach((element, index) =>
            element.creditentials.userName === incomingData.creditentials.userName ? thereIsADuplicate = true
                : console.log(thereIsADuplicate));

        !thereIsADuplicate && dataJSON.push(incomingData)

        const newJSONString = JSON.stringify(dataJSON, null, 4);

        fs.writeFile(users, newJSONString, (err) => {
            if (err) res.status(500).send
        })
    })

});

app.post("/favourite", (req, res) => {
    const users = `${__dirname}/profiles/profiles.json`;

    fs.readFile(users, "utf-8", (err, data) => {
        const dataJSON = JSON.parse(data);
        const incomingData = JSON.parse(JSON.stringify(req.body));

        const newData = dataJSON.map(element => {
            if (element.creditentials.userName === incomingData.userName.userName) {
                if (element.favourited.includes(incomingData.favobject)) {
                    console.log("duplicate!");
                } else {
                    element.favourited.push(incomingData.favobject);
                }
            }
        })

        const newJSONString = JSON.stringify(dataJSON, null, 4);

        fs.writeFile(users, newJSONString, (err) => {
            if (err) res.status(500).send
        })

    });
})

app.delete("/favouriteRemove", (req, res) => {
    const users = `${__dirname}/profiles/profiles.json`;

    fs.readFile(users, "utf-8", (err, data) => {
        const dataJSON = JSON.parse(data);
        const incomingData = JSON.parse(JSON.stringify(req.body));
        console.log(incomingData)

        const newData = dataJSON.map(element => {
            if (element.creditentials.userName === incomingData.userName.userName) {
                if (element.favourited.includes(incomingData.favobject)) {
                    const modifiedFavs = element.favourited.splice(element.favourited.indexOf(incomingData.favobject));
                    console.log(modifiedFavs, element.favourited);
                    modifiedFavs.shift();
                    console.log(modifiedFavs, element.favourited)
                    element.favourited = element.favourited.concat(modifiedFavs)
                    console.log(element.favourited)
                }
            }
        })

        const newJSONString = JSON.stringify(dataJSON, null, 4);

        fs.writeFile(users, newJSONString, (err) => {
            if (err) res.status(500).send
        })

    });

    res.sendStatus(200);

})

app.listen(8800, () => console.log('API is running on http://localhost:8800/login'))