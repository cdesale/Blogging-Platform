//1. Import the libraries.
const express = require('express')
require('dotenv/config')

const app = express()
const usersRoute = require('./routes/users')

//2. Middleware.
app.use('/users', usersRoute)

//3. Create a route.
app.get('/',(req,res)=>{
    res.send('Welcome to MiniWall!')
})

//4. Start the server.
app.listen(process.env.PORT,()=>{
    console.log('Server is up and running...')
})