const express = require('express');
const app = express();
const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const userRoute =require('./routes/userRoute')
const bookingRoute = require('./routes/bookingsRoute')
const  cors = require('cors');
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded())
app.use('/api/rooms',roomsRoute)
app.use('/api/users',userRoute)
app.use('/api/bookings',bookingRoute)
const port = process.env.PORT ||5000;

app.listen(port,()=>{
    console.log(`server is started now on port ${port}`);
})