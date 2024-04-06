
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'


dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB connected')

})
.catch((err)=>{
    console.log("mongoDB error: ",err)
})
const app=express();

app.listen(3000,()=>{
    console.log('Server on port 3000 !!!');
})

