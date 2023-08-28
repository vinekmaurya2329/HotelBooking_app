 const express =require('express');
 const router =express.Router();

 
 

 const Room  = require('../models/room')

router.get('/getallrooms', async(req,res)=>{
    try {
        const rooms = await  Room.find({})
        res.send(rooms)
    } catch (error) {
        
       return res.status(400).json({message:error})
    }
});

// router.post('/getroombyid', async(req,res)=>{
//     const roomid = req.body.roomid;
//     console.log(roomid)
//     try {
//         const room = await  Room.findOne({_id:roomid})
//         res.send(room)
//     } catch (error) {
        
//        return res.status(400).json({message:error})
//     }
// })

//  new code by mentor
router.get('/getroombyid/:roomid', async(req,res)=>{
    const roomid= req.params.roomid;
   
    console.log('roomid:', roomid)
    try {
        const room = await  Room.findOne({_id:roomid});
        res.send(room)
     
      console.log( 'room',room);
    } catch (error) { 
        
       return res.status(400).send({
        message:'error while getroombyid' 
     
       }) 
       
    }
})

router.post('/addroom',async (req,res)=>{
try {
    const newroom = new Room(req.body)
    await newroom.save()
    res.send('new Room added successfully')
} catch (error) {
    res.status(400).json({error})
}
})

module.exports =router