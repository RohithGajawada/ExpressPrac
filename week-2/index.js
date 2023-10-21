const express = require('express')
const app = express()
const port = 3000

function firstHandle(req, res){
    var ans = calSum(1000);
    var f = "the sum is " + ans;
    res.send(f)
}

app.get('/', firstHandle)

function listenn(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, listenn)


function calSum(num){
    var sum = 0;
    for(var i =0; i < num; i++){
        sum = sum + i;
    }
    return sum;
}

