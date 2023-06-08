import axios from 'axios';
import { MongoClient } from 'mongodb';

const handler = async (req, res )=>{
    if(req.method === 'POST'){
        const  { name, score, duration} = req.body;

        const userInfo = {
            name,
            score,
            duration
        }
        axios.post('http://localhost:4000', userInfo);
        // let client;
        // try {
        // client = await MongoClient.connect('mongodb+srv://jaek1783:1234@tetriscluster.4cdvj0x.mongodb.net/user?retryWrites=true&w=majority')
        // } catch (error) {
        // res.stauts(500). json({message:error.message});
        // return;
        // } 
        // const db = client.db();
        // try {
        //     const result = await db.collection('rangking').insertOne(userInfo);
        // } catch (error) {
        //     client.close();
        //     res.stauts(500). json({message:error.message});
        //     return; 
        // }
        // try {
        //     const cursor = db.collection('rangking').find();
        //     await cursor.forEach((doc) => {
        //       console.log(doc);
        //     });
        // } catch (error) {
        //     client.close();
        //     res.stauts(500). json({message:error.message});
        //     return; 
        // }
        // client.close();
res.status(201).json({userInfo:userInfo } ) 
    }
};

export default handler;