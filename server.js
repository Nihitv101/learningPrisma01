import dotenv from 'dotenv';
import express from 'express';

require('dotenv');


const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    return res.send("hi")
})



app.listen(PORT, ()=>{
    console.log(`server isr running in port ${PORT}`);
})
