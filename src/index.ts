import * as dotenv from 'dotenv';
// const app=require('./server');
import app from './server';


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});