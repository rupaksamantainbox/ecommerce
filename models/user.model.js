//adding modules
const mongoose = require('mongoose')

//Creating schema
const userschema = mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    userId :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        minlength : 10,
        unique : true
    },
    userType : {
        type : String,
        required : true,
        enum : ["CUSTOMER","ADMIN"]
    }
},{timestamps : true ,versionkey : false})

//creating collections
module.exports = mongoose.model("User",userschema)