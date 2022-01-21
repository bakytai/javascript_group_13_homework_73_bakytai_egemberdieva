const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('What is your name?\n');
});

app.get('/:name', (req, res) => {
    res.send(`<p>My name is ${req.params.name}</p>`);
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});