const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')

const app=express()
const port=3000

app.use(cors({origin: 'http://localhost:5173'}));
app.use(bodyParser.json())

dotenv.config()

mongoose.connect(process.env.ATLAS_URI, {dbName:'xiv-collect'})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => 
{
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema
({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => 
{
    const { username, password } = req.body;
    const user = await User.findOne({username})
    
    if (!user || user.password !== password) 
    {
        return res.status(401).send('Invalid username or password');
    } 
    
    res.status(200).send({ username: user.username });
});

app.post('/register', async (req, res) => 
{
    const { username, password } = req.body;
    const existingUser = await User.findOne({username});

    if (existingUser) 
    {
        return res.status(409).send('Username already exists');
    } 
    
    const newUser=new User({ username, password })
    await newUser.save()
    res.status(201).send('User registered successfully')
});


app.listen(port, () => 
{
    console.log(`Server running on port ${port}`);
});