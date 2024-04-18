const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://atletlgomez:1816869070597Ag$@cluster0.v5ilex5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
client.connect();

async function products() {
    try {
        const dataset = await client.db('ecommerce').collection('products').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
module.exports = {products};