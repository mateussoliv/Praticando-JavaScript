const express = require('express');
const path = require('path')

const app = express();

app.use("/meusite",express.static(path.join(__dirname, 'Client')))


app.get("/", (req,res)=>{

    // res.set("Content-Type", "text/plain")
    res.type("txt")
    res.send("<h1>Hello World From Get</h1>");

})

app.post("/", (req, res)=>{

    res.type("txt");
    res.send("<h1>Hellow World From Post</h1>")

})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server Running on Port: ${PORT}`)
})