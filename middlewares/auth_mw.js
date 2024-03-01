const user_model = require('../models/user.model')

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

module.exports = {
    verifySignupbody : verifySignupbody
}