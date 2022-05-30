import express from 'express'
import connectDB from './config/db';
const app=express();

connectDB();


app.get('/',(req,res)=>{
    res.status(200).json({
        data:null,
        msg:'Server is running...',
        success:true
    })
});

app.listen(3000)