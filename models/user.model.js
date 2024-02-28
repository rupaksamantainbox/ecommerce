//adding modules
const mongoose = require('mongoose')

//Creating schema
const userschema = mongoose.Schema({

    name :{
        type : string,
        required : true
    },
    userId :{
        type : string,
        required : true,
        unique : true
    },
    password :{
        type : string,
        required : true
    },
    email :{
        type : string,
        required : true,
        minlength : 10,
        unique : true
    },
    userType : {
        type : string,
        required : true,
        enum : ["CUSTOMER","ADMIN"]
    }
},{timestamps : true ,versionkey : false})

//creating collections
module.exports = mongoose.model("User",userschema)