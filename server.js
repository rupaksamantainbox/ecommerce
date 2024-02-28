const express = require('express')
const mongoose = require('mongoose')
const server_config = require('./config/server.config')

//server start
const app = express()
app.listen(server_config.PORT,()=>{
    console.log("Server Started port No :",server_config.PORT)
})