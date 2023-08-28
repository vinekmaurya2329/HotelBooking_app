const mongoose =require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin :{
        type:Boolean,
        default:false
    },
    type:{
        type:String,
        required:true
    }
    
},{timestamps:true})
 const userModel = mongoose.model('user',userSchema)
 module.exports = userModel