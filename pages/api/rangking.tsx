import { MongoClient } from 'mongodb';
const handler = async (req, res )=>{

        const  {id, name, score, duration} = req.body;

        const userInfo = {
            id,
            name,
            score,
            duration
        }
        let client;
        try {
        client = await MongoClient.connect('mongodb+srv://jaek1783:q6HhO1W9hXzhByzg@tetriscluster.4cdvj0x.mongodb.net/')
        } catch (error) {
        res.stauts(500). json({message:error.message});
        return;
        } 
        const db = client.db();
        try {
            const result = await db.collection('rangking').insertOne(userInfo);
            userInfo.id = result.insertedId;
        } catch (error) {
            client.close();
            res.stauts(500). json({message:error.message});
            return; 
        }
        client.close();
res.status(201).json({message:userInfo } ) 
};

export default handler;