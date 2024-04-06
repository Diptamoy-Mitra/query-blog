
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

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


// all routes define here
app.use('/api/user', userRoutes)  //http://localhost:3000/api/user/test