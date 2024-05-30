const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
dotenv.config()

const app=express()
const port=3000

app.use(cors())
app.use(bodyParser.json())

mongoose.connect()

app.post('/login', async (req, res) => 
{
    const { username, password } = req.body;
    let collection = await db.collection('users');
    let query = { username: username };
    let result = await collection.findOne(query);
    
    if (!result) {
        return res.status(401).send('Invalid username or incorrect password');
    } else if (password === result.password) {
        return res.status(200).send({ username: username });
    } else {
        return res.status(401).send('Invalid username or incorrect password');
    }
});

app.post('/register', async (req, res) => 
{
    const { username, password } = req.body;
    let collection = await db.collection('users');
    let query = { username: username };
    let result = await collection.findOne(query);

    if (result) 
    {
        return res.status(409).send('Username already exists');
    } 
    else 
    {
        await collection.insertOne({ username: username, password: password });
        return res.status(201).send('User registered successfully');
    }
});


app.listen(5173, () => 
{
    console.log('Server running on port 5173');
});