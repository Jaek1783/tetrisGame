require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.MONGODB_PORT || 4000;
const MONGODB_URI = require('./config');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));;

app.use((req,res,next)=>{
    console.log('1 Time: ', Date.now());
    next();
});
app.listen(PORT, ()=>{
    console.log(`${PORT} 서버가 켜졌습니다`)
})
app.post('/',(req,res)=>{
    console.log(req.body);
})

app.get('/',(req,res)=>{
    res.send('hello')
})