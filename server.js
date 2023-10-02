import dotenv from 'dotenv';
import express from 'express';

import userRoute from './routes/user.route.js';

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/user', userRoute);





app.listen(PORT, ()=>{
    console.log(`server isr running in port ${PORT}`);
})
