const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'password';

app.get('/encode/:word', (req, res) => {
    const code = Vigenere.Cipher(password).crypt(`${req.params.word}`);
    res.send(`<p>${code}</p>`);
});

app.get('/decode/:letters', (req, res) => {
    const decode = Vigenere.Decipher(password).crypt(`${req.params.letters}`);
    res.send(`<p>${decode}</p>`);
});


app.listen(port, () => {
    console.log('We are live on ' + port);
});