const express = require("express");
const app1 = express();
const bodyparser=require("body-parser")
const session= require("express-session")
const usercontroller = require("../controllers/usercontroller");
const config = require('../config/config');
const auth =require("../middleware/auth")
app1.use(session({secret:config.sec}));

app1.set('view engine','ejs');
app1.set('views','./views/USERS');


app1.use(bodyparser.json());
app1.use(bodyparser.urlencoded({extended:true}))


const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'./public/userimage'));
    },
    filename:function(req,file,cb){
        const name = Date.now() + '-' + file.originalname;
        cb(null,name)
    }
});

const upload = multer({ storage: storage })

app1.get('/register',auth.islogout,usercontroller.loadRegister);
app1.post('/register',upload.single('image'),usercontroller.insertUser);


app1.get('/login',auth.islogout, usercontroller.loginload);

app1.post('/login',usercontroller.verifylogin);


 app1.get('/home',auth.islogin,usercontroller.loadhome);


app1.get('/logout',auth.islogin,usercontroller.logout);
module.exports = app1;

