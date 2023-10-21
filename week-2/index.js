const express = require('express')
const app = express()
const port = 3000

function firstHandle(req, res){
    res.send("hello world")
}

app.get('/', firstHandle)

function listenn(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, listenn)