// const express=require('express');
import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import {verifyJWT} from './modules/auth';

const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get('/',(req,res)=>{
    res.send('<h1>dfdf</h1>');
}
);

app.use('/api',verifyJWT,router)

export default app;