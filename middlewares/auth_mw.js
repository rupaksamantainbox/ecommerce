const user_model = require('../models/user.model')
const jwt = require('jsonwebtoken')
const auth_config = require('../config/auth.config')

const verifySignupbody = async (req,res,next) =>{
    try{
        if(!req.body.name){
            res.status(500).send({
                message:"Error, name not found"
            })
        }
        if(!req.body.email){
            res.status(500).send({
                message:"Error, email not found"
            })
        }
        if(!req.body.userId){
            res.status(500).send({
                message:"Error, userId not found"
            })
        }

        const user = await user_model.findOne({userId : req.body.userId})
        if(user){
            return res.status(500).send({
                message:"Error, userId already exist"
            })
        }
        next()

    }catch(error){
        console.log("Error while validating response",error)
        res.status(500).send({
            message: "Error while validating response"
        })
    }
}

const verifySigninbody = async (req,res,next) =>{

    if(!req.body.userId){
        return res.status(400).send({
            message: "User Id Blank"
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message: "Password Blank"
        })
    }
    next()
}

const verifytoken = async(req,res,next) => {
    const token = req.headers['x-access-token']

    if(!token){
        return res.status(403).send({
            message : "No token found : Unauthorized"
        })
    }

    //verify token
    jwt.verify(token,auth_config.secret,async (err,decoded) =>{
        if(err){
            return res.status(401).send({
                message : "Unauthorized"
            })
        }
        const user = await user_model.findOne({userId:decoded.id})
        if(!user){
            return res.status(400).send({
                message : "Unauthorized. user not exist"
            })
        }
        
        //set the user info into request body
        req.user = user
        next()
    })
    
}

const isAdmin = async(req,res,next) =>{
    const user = req.user
    if(user && user.userType =="ADMIN"){
        next()
    }else{
        return res.status(403).send({
            message : "Only admin are allow in the end point"
        })
    }
}

module.exports = {
    verifySignupbody : verifySignupbody,
    verifySigninbody : verifySigninbody,
    verifytoken : verifytoken,
    isAdmin : isAdmin
}