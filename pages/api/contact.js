import { MongoClient } from 'mongodb';

// process.env

async function handler(req, res) {
   if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (!email || !message || !name) {
            res.status(422).json({
                message: 'Invalid Inputs'
            });

            return;
        } 
        
        const newMessage = {
            email,
            name,
            message
        };
 
        const connectionString =  `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.topzy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        let client;
        try {
           client = await MongoClient.connect(connectionString);
        } catch(err) {
            res.status(500).json({
                message: 'Error connecting to DB'
            });

            return;
        }

        try {
            // connected db
            const db = client.db();
            const result = await  db.collection('messages').insertOne(newMessage)

            res.status(210).json({
                message: 'Successfully submitted message',
                _id: result.insertedId
            });
        } catch(err) {
            client.close();
            res.status(500).json({
                message: 'Error Inserting to Db'
            });

            return;
        }
   }
}

export default handler;