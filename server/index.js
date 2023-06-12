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

const User = require('./schema');

mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));;

// app.use((req,res,next)=>{
//     console.log('1 Time: ', Date.now());
//     next();
// });
app.listen(PORT, ()=>{
    console.log(`${PORT} 서버가 켜졌습니다`)
})
app.post('/',async (req,res)=>{
    // console.log(req.body);
    const {name, score, duration} = req.body;
    console.log(name, score,duration);
    const newRank = new User({
        name:name,
        score:score,
        duration:duration
    });
    await newRank.save();
    return res.redirect('/');
})

app.get('/',async (req,res)=>{
        try {
          const ranks = await User.find(); // User 모델을 사용하여 데이터베이스에서 랭크 정보를 검색합니다.
        //   res.json(ranks);
          res.send(ranks); 
        } catch (err) {
          console.error('랭크 정보를 가져올 수 없습니다.', err);
          res.status(500).json({ message: '랭크 정보를 가져올 수 없습니다.' });
          res.send('err');
        }
})