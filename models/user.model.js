const mongoose = require('mongoose')
const {isEmail}=require('validator')
// if email if valid



const userSchema =new mongoose.Schema({
  username:{
    type:String, 
    required:true, 
    minLength:3, 
  maxLength:40, 
  unique:true,
  trim:true
  },
  email:{
    type:String,
    required:true,
    validate:[isEmail],
    lowercase:true,
    unique:true,
    trim:true
  },
  password:{
    type:String, 
    required:true,
    max:1000,
    minLength:6

  },
  picture:{
    type:String
   
  }
})
const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel