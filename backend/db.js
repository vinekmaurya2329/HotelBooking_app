const mongoose = require('mongoose');

var mongoURL = process.env.URL
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});
var connection = mongoose.connection

connection.on('error',()=>{
    console.log('error while connecting mongodb')
})
connection.on('connected',()=>{
    console.log('connected successfully from mongoDB')
})
module.exports =mongoose  
