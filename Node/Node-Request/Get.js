var express = require('express');
var app = express();
var bodyParse = require("body-parser")

let consoleBody = (req, res, next) =>{
    console.log(req.body)
    next()
}

let hello = (req, res) =>{
    res.send("Hello World");
}


app.use('/', bodyParse.json());
app.use('/', consoleBody)
app.get('/', hello);

app.post('/', hello);

// app.get('/', (req, res)=>{
//     console.log(req);
//     res.send('<h1>Hello World</h1>')
// })

// app.post('/', (req, res)=>{
//     console.log(req);
//     res.send("Hello World");
// })


app.listen(3000, ()=> console.log('Server Rodando'))