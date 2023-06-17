const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://vinekmaurya2329:vinek7068594746@cluster0.5iwx2uw.mongodb.net/mern-rooms'; 

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});
var connection = mongoose.connection

connection.on('error',()=>{
    console.log('error while connecting mongodb')
})
connection.on('connected',()=>{
    console.log('connected successfully from mongoDB')
})
module.exports =mongoose  