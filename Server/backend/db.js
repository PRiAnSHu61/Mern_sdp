// const {MongoClient} = require('mongodb');
// const uri = 'mongodb://localhost:27017/trainer';
// async function main() {
//     const client = new MongoClient(uri);
//     try{
//         await client.connect();
//         console.log('Connected to MongoDB');
//         const database = client.db('trainer');
//         const collection = database.collection('trainer');
//         const result = await collection.insertOne({fieldName: 'DSA', trainerName: "Buck", phone: 3948230954, email: "buck@gmail.com", location: "Osaka", skill: "Backend"});
//         console.log('Document inserted with _id:', result.insertedId)
//         const documents = await collection.find({}).toArray();
//         console.log('Found Documents: ', documents);
//     }
//     finally{
//         await client.close();
//     }
// }

// main().catch(console.error());


const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/trainer';
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const User = mongoose.model('User', userSchema);
async function main() {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');

        // await User.deleteMany({});
        // console.log('Cleared the collection');

        //first user
        const user1 = new User({name: 'Alice', age: 25});
        await user1.save();
        console.log('User1 saved: ', user1);

        //second user
        const user2 = new User({name: 'John', age: 30});
        await user2.save();
        console.log('User2 saved: ', user2);

        //third user
        const user3 = new User({name: 'Max', age: 35});
        await user3.save();
        console.log('User3 saved: ', user3);

        const users = await User.find({});
        console.log('Found Users: ', users);
    }
    finally{
        await mongoose.disconnect();
    }
}

main().catch(console.error);
