const express = require('express');

const PORT = 5050;
const app =express();

app.get('/' , (req,res) => res.send('<h1>Hello Hadi....V2</h1>'));
app.get('/help' , (req,res) => res.send('<h1>How can I help you?</h1>'));

app.listen(PORT, () => console.log('app is up and running....V2'));