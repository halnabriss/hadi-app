const express = require('express');

const PORT = 5050;
const app =express();

app.get('/' , (req,res) => res.send('<h1>Hellooooddddooo...Fun</h1>'));
app.get('/help' , (req,res) => res.send('<h1>How. Caaaan I Help You?</h1>'));

app.listen(PORT, () => console.log('app is running.....'));
