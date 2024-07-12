const express = require('express');

const PORT = 5050;
const app =express();

app.get('/' , (req,res) => res.send('<h1>Hello .....Hadi..A..V2...With Vol2222</h1>'));
app.get('/help' , (req,res) => res.send('<h1>How ...A.can I help you?..With Vol222</h1>'));

app.listen(PORT, () => console.log('app .....is upA and running....V2...With Vol2222'));
