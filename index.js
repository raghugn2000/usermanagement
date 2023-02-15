const mongoose=require("mongoose");
const express = require("express");
const app = express();


mongoose.connect("mongodb://localhost:27017/exp2-user-management")
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