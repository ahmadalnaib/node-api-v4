// const express=require('express');
import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import {verifyJWT} from './modules/auth';
import {createNewUser,signin} from './handlers/user';

const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/',(req,res)=>{
    res.send('<h1>hi</h1>');
}
);

app.use('/api',verifyJWT,router)

app.post('/user',createNewUser);
app.post('/signin',signin);

app.use((err,req,res,next)=>{
 if(err.type === 'auth'){
    return res.status(401).json({error:err.message});
 } else if (err.type === 'input'){
    return res.status(400).json({error:err.message});
 }else{
    return res.status(500).json({error:'Internal server error'});
 }
}
);

export default app;