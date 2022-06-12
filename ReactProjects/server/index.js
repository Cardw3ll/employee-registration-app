const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv')
require('dotenv').config();

const employeeModel = require("./models/employee")

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/employeeData',{
    useNewUrlParser:true,
});

app.get('/read',async (req,res)=>{
    employeeModel.find({}, (err,result)=>{
        if(err){
            res.send(err);
        }
        res.send(result);
    })
} );

app.post('/insert',async (req,res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
const employ = new employeeModel({email:email , name:name, lastName:lastName, username:username, password:password});
try{
     employ.save();
     
}catch(err){
    console.log(err);
}
})

app.listen(3001, () =>{
    console.log("server running on port 3001")
});