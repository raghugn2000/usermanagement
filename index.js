const mongoose=require("mongoose");
const express = require("express");
const app = express();


mongoose.connect("mongodb+srv://admin:hlvAeOTO3TlkixEm@cluster0.ffl2zmj.mongodb.net/test")
.then(()=>{
console.log("connected to mongodb")});

app.use(express.json())
// for router use 
// const userRouter = require('../routers');
const userR = require('./routers/userRouter');
app.use('/',userR);


app.listen(3000,function(){
    console.log("server is running in 3000 port ");
})
