const express = require('express');
const  router = express.Router();

const User = require('../models/user')

router.post('/register',async(req,res)=>{
    const newuser =  new User(req.body)
    console.log(newuser)
    try {
        const user= await newuser.save()
        res.send('user register successfully')
    } catch (error) {
        return res.status(400).json({error})  
    }
});

router.post('/login',async(req,res)=>{
    const {email,password}= req.body;
    try {
        const user = await User.findOne({email:email , password:password})
        
        if(user){
            const temp= {name:user.name,email:user.email,isAdmin:user.isAdmin,_id:user._id,type:user.type}
            res.send(temp)
            console.log(temp)
        }else{return res.status(400).json( {message:"something went wrong"})};
        
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.get('/getallusers',async (req,res)=>{
try {
    const users = await User.find()
    res.send(users)
} catch (error) {
    return res.status(400).json({error})
}
});


router.get('/name',(req,res)=>{
    res.send({
        name:'aash maurya'
    })
})
module.exports= router  