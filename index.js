const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')

const app= express()
app.use(express.json())
const port = 3005

app.use('/',router)

app.listen(port,()=>{
    console.log('Listening on port ', port)
})