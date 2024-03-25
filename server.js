const express = require('express')
const mongoose = require('mongoose')
const server_config = require('./config/server.config')
const db_config = require('./config/db.config')
const user_model = require('./models/user.model')
const bcrypt = require('bcryptjs')
const authRoute = require('./routes/auth.route')

//mngoose connection
mongoose.connect(db_config.DB_URL)
const db = mongoose.connection

db.on("error",()=>{
    console.log("Error while connection")
})
db.once("open", ()=>{
    console.log("connected to MongoDB")
    //init()
})
//check user exist
// async function init(){
//     //reading data
//     try{
//         let user = await user_model.findOne({userId : 'admin'})
//         if(user){
//             console.log("User already Exist")
//             return
//         }
//         //console.log("User data",user)
//     }catch(error){
//         console.log("Error while reading admin User",error)
//     }
    
//     //user create
//     try{
//         user = await user_model.create({
//             name : "Rupak",
//             userId : "admin",
//             email : "rupaksamanta@gmail.com",
//             userType : "ADMIN",
//             password : bcrypt.hashSync("12345",8)
//         })
//         console.log("admin Created",user)

//     }catch(error){
//         console.log("Error while creating admin User",error)
//     }
// }

const app = express()
app.use(express.json())

//stich the route 
require('./routes/auth.route')(app)
require('./routes/category.route')(app)

//server start
app.listen(server_config.PORT,()=>{
    console.log("Server Started port No :",server_config.PORT)
})