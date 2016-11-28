var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var id = 1;
var items = [
    { id: id++, name: 'abc', isCompleted: true },
    { id: id++, name: 'def', isCompleted: false }
];

app.use(bodyParser.json())
app.use('/', express.static('public'));

app.get('/api/todo', (req, res) => {
    res.send(items);
});

app.get('/api/todo/:id', (req, res) => {
    var item = items.find(el => el.id == req.params.id);
    res.send(item);
});

app.post('/api/todo', (req, res) => {
    var newItem = { id: id++, name: req.body.name, isCompleted: false };
    items.push(newItem);
    res.send(newItem);
});

app.put('/api/todo/:id', (req, res) => {
    var updatedItem = items.find(el => el.id == req.params.id);
    updatedItem.name = req.body.name;
    updatedItem.isCompleted = req.body.checked;
    res.send(updatedItem);
});

app.delete('/api/todo/:id', (req, res) => {
    var index = items.findIndex(el => el.id == req.params.id);
    var deletedItems = items.splice(index, 1);
    res.send(deletedItems[0]);
})

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});