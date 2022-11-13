//1. Import the libraries.
const express = require('express')
require('dotenv/config')

const app = express()
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//2. Middleware.
app.use(bodyParser.json())
app.use('/users', usersRoute)
app.use('/posts', postsRoute)
mongoose.connect(process.env.DB_CONNECTOR, ()=>{
    console.log('DB is connected')
})

//3. Create a route.
app.get('/',(req,res)=>{
    res.send('Welcome to MiniWall!')
})

//4. Start the server.
app.listen(process.env.PORT,()=>{
    console.log('Server is up and running...')
})