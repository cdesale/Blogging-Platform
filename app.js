//1. Import the libraries.
const express = require('express')
require('dotenv/config')

const app = express()

//2. Create a route.
app.get('/',(req,res)=>{
    res.send('Welcome to MiniWall!')
})

//3. Start the server.
app.listen(process.env.PORT,()=>{
    console.log('Server is up and running...')
})