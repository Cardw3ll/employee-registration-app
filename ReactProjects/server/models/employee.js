const mongoose= require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        }
    }
);

const employ = mongoose.model("employs", EmployeeSchema)
module.exports = employ;