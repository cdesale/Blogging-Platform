//1. Import the libraries.
const express = require('express')

const app = express()

//2. Create a route.
app.get('/',(req,res)=>{
    res.send('Welcome to MiniWall!')
})

//3. Start the server.
app.listen(3000,()=>{
    console.log('Server is up and running...')
})