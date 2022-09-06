const express = require('express');
const cors = require('cors');
const fs = require('fs');
const db = require('./storage/file-database');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/tasks', (req, res) => {
  res.send(db.get('tasks').value());
});

app.get('/tasks/filter/', (req, res) => {
  const allTasks = db.get('tasks').value();
  const filteredTasks = allTasks.filter((item) => {
    return item.title.includes(req.query.name);
  });

  res.send(filteredTasks);
});

app.get('/tasks/:id', (req, res) => {
  res.header("Content-Type", 'application/json');
  fs.readFile('./storage/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }

    const dataJSON = JSON.parse(data);
    console.log(dataJSON.tasks)
    console.log(req.params.id)
    parseInt(req.params.id) <= dataJSON.tasks.length ? dataJSON.tasks.forEach(element => parseInt(req.params.id) === element.id && res.send(element)) : res.send("No task with this ID")
  })
})

app.get('/tasks/:id/isCompleted', (req, res) => {
  res.header("Content-Type", 'application/json');
  fs.readFile('./storage/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    }

    const dataJSON = JSON.parse(data);
    console.log(dataJSON.tasks)
    console.log(req.params)
    parseInt(req.params.id) <= dataJSON.tasks.length ? dataJSON.tasks.forEach(element => parseInt(req.params.id) === element.id && res.send(element.isCompleted)) : res.send("No task with this ID")
  })
})

app.post('/tasks', (req, res) => {
  console.log(req.body)
  let id;
  try {
    id = db.get('tasks')
      .value()
      .reduce((a, b) => (a.id > b.id ? a : b))
      .id + 1;
  } catch { id = 1; }
  const response = db
    .get('tasks')
    .push({ id: id, title: req.body.title, isCompleted: false })
    .write();
  res.send({ status: "added task" })
});

app.patch('/tasks/:id/isCompleted', (req, res) => {
  console.log(req.params);
  console.log(req.body)
  const response = db
    .get('tasks')
    .find({ id: parseInt(req.params.id) })
    .assign({ isCompleted: req.body.isCompleted })
    .write();

  res.send(response);
});

app.delete('/tasks/:id', function (req, res) {
  const id = req.params.id
  console.log(id.slice(1))
  const response = db
    .get('tasks')
    .remove((item) => {
      return item.id === parseInt(id.slice(1));
    })
    .write();

  const dataFile = `${__dirname}/storage/db.json`
  console.log(dataFile);
  fs.readFile(dataFile, (err, data) => {
    if (err) console.log(err);

    const newData = JSON.parse(data);

    const newDataRearanged = newData.tasks.map((element, idx) => element.id = idx + 1);

    newDataJSON = JSON.stringify(newData, null, 4);

    fs.writeFile(dataFile, newDataJSON, (err, data) => {
      if (err) console.log(err);
      res.status(500).send
    })
  })

  res.send(response);
});

const port = 6789;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
