const express = require('express');
const app = express();
const fs = require('fs');
const bodyParse = require('body-parser');
const urlEncodedParser = bodyParse.urlencoded({ extended: false });

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("<h1>Hello World! It's Codecool</h1>")
});

app.get('/api/students', (req, res) => {
    res.header("Content-Type", 'application/json');
    fs.readFile('data/students.json', 'utf8', (error, data) => {
        if (error) {

            return console.log(error);
        };
        res.send(JSON.parse(data));
    });
});

app.get('/api/students/:id', (req, res) => {
    res.header("Content-Type", 'application/json');
    fs.readFile('data/students.json', 'utf8', (error, data) => {
        if (error) {
            return console.log(error);
        };

        const dataJSON = JSON.parse(data);

        parseInt(req.params.id) <= dataJSON.length ? dataJSON.forEach(element => parseInt(req.params.id) === element.id && res.send(element))
            : res.send({ id: Number(req.params.id), "name": "none", "status": "none" });
    });
});

app.get('/api/status/active', (req, res) => {
    res.header("Content-Type", 'application/json');
    fs.readFile('data/students.json', 'utf8', (error, data) => {
        if (error) {
            return console.log(error);
        }
        const dataJSON = JSON.parse(data);
        const result = dataJSON.filter(element => element.status);

        res.send(result);
    });
});

app.get('/api/status/finished', (req, res) => {
    res.header("Content-Type", 'application/json');
    fs.readFile('data/students.json', 'utf8', (error, data) => {

        if (error) {
            return console.log(error);
        };

        const dataJSON = JSON.parse(data);
        const result = dataJSON.filter(element => !element.status);

        res.send(result);
    });
});

app.get('/api/upload', (req, res) => {
    const form = () => {
        return `
        <form action="/api/upload" method="POST">  
            Student's name: <input type="text" name="name"> 
            <input type="submit" value="Submit">
        </form>
        `
    };

    res.send(`${form()}`);
});

app.post('/api/upload', urlEncodedParser, (req, res) => {
    fs.readFile('data/students.json', 'utf8', (error, data) => {

        if (error) {
            return console.log(error);
        };

        const dataJSON = JSON.parse(data);

        let addStudent = { "id": dataJSON.length + 1, "name": req.body.name, "status": true };

        dataJSON.push(addStudent);

        fs.writeFile('data/students.json', JSON.stringify(dataJSON, null, 4), err => {
            if (err) {
                console.log('Failed to write to students.json');
                return;
            }
            console.log('students.json updated');

        });
    });

    res.send('<h1>New student added!</h1>');
    res.end();
});

app.listen(3000);