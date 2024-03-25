const category_model = require("../models/category.model")


exports.createNewCategory = async (req, res)=>{
    //Read the req body & Create the category object
    const cat_data = {
        name : req.body.name,
        descripion : req.body.descripion
    }
    try{
       //Insert into mongodb
       const category = await category_model.create(cat_data)
       return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category", err)
        return res.status(500).send({
            message : "Error while creating the category"
        })
    }
}

exports.findAllCategory = async (req,res) =>{
    //Read the category name
    try{
        const categories  = await category_model.find()
        return res.status(201).send(categories)
    }catch(err){
        console.log("Error While Find all category",err)
        return res.status(500).send({
            message : "Error While Find all category"
        })
    }
}

exports.findOneCategory = async (req,res) =>{
    //Read the one category name
    try{
        const categoryId = req.body.name;
        const category  = await category_model.findOne({name : categoryId})
        return res.status(201).send(category)
    }catch(err){
        console.log("Error While Find category",err)
        return res.status(500).send({
            message : "Error While Find category"
        })
    }
}

exports.updateCategory = async (req, res) => {

    const update_data = {
        name: req.body.name,
        descripion: req.body.descripion
    }
    try{
        const categoryId = req.body.name;
        const category = await category_model.updateOne({name : categoryId},update_data)
        return res.status(201).send(category)
     }catch(err){
        console.log("Error while Updating the category", err)
        return res.status(500).send({
            message : "Error while Updating the category"
        })
     }
}

exports.deleteCategory = async (req, res) => {

    try{
        const categoryId = req.body.name;
        const category = await category_model.deleteOne({name : categoryId})
        return res.status(201).send(category)
     }catch(err){
        console.log("Error while Deleting the category", err)
        return res.status(500).send({
            message : "Error while Deleting the category"
        })
     }
}
