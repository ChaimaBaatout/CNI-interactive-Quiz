require("dotenv").config();
const express = require("express");
const app= express();
const mongoose= require("mongoose");

app.use(express.json());
const cors = require("cors");
const jwt = require('jsonwebtoken');
app.use(cors());
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;

const mongoUrl = process.env.MONGO_URL;
mongoose
.connect(mongoUrl,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("Connected to database");
})
.catch((e) => console.log(e));








app.post("/userData",async (req, res)=>{
    const {token} = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        User.findOne({ email: useremail}).then((data) => {
            res.send({ status: "ok", data:data});
        }).catch((error)=>{
            res.send({ status: "error", data: error });
        });
    } catch (error) {
        
    }
});





app.listen(5000,() => {
    console.log("server started");
});

//import du modele en mongodb
require("./userDetails");
const User = mongoose.model("UserInfo");
//creation du new user en mongodb
app.post("/register",async(req,res)=>{
    const {fname, lname, email, password}=req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.json({ error: "User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status: "error"});
    }
});

app.post("/login-user", async (req, res)=> {
    const {email, password} = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User Not found"});
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({}, JWT_SECRET);
//jwt.sign({}, JWT_SECRET)
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        }else{
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });


});


//partie student
//import du modele en mongodb
require("./studentDetails");
const Student = mongoose.model("StudentInfo");
//creation du new user en mongodb
app.post("/register2",async(req,res)=>{
    const {fname, lname, email, password}=req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        const oldUser = await Student.findOne({email});
        if(oldUser){
            return res.json({ error: "Student Exists"});
        }
        await Student.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status: "error"});
    }
});

app.post("/login-student", async (req, res)=> {
    const {email, password} = req.body;

    const student = await Student.findOne({ email });
    if (!student) {
        return res.json({ error: "Student Not found"});
    }
    if(await bcrypt.compare(password, student.password)){
        const token = jwt.sign({}, JWT_SECRET);
//jwt.sign({}, JWT_SECRET)
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        }else{
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });


})




