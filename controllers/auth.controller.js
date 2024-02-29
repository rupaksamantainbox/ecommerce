const bcrypt = require('bcryptjs')
const user_model = require('../models/user.model')

exports.signup = async (req,res) => {

    //read the request body
    const req_body = req.body

    //insert the data in user collection
    const userObj = {
        name : req_body.name,
        userId : req_body.userId,
        email : req_body.email,
        userType : req_body.userType,
        password : bcrypt.hashSync(req_body.password,8)
    }

    try{
        const user_created = await user_model.create(userObj)
        const res_obj = {
            name : user_created.name,
            userId : user_created.userId,
            email : user_created.email,
            userType : user_created.userType,
            createdAt :user_created.createdAt,
            updatedAt :user_created.updatedAt
        }
        res.status(201).send(res_obj)
        
    }catch(error){
        console.log("error while Register User")
        res.status(500).send({
            message : " Some error occured while registering"
        })
    }

}