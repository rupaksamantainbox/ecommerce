const categorycontroller = require('../controllers/category.controller')
const auth_mw = require('../middlewares/auth_mw')

//localhost:8080/ecomm/api/v1/categories

module.exports = (app)=>{
    app.post('/ecomm/api/v1/category/create',[auth_mw.verifytoken,auth_mw.isAdmin],categorycontroller.createNewCategory)

    app.get('/ecomm/api/v1/category/getall',[auth_mw.verifytoken,auth_mw.isAdmin],categorycontroller.findAllCategory)

    app.get('/ecomm/api/v1/category/getone',[auth_mw.verifytoken,auth_mw.isAdmin],categorycontroller.findOneCategory)

    app.put('/ecomm/api/v1/category/update',[auth_mw.verifytoken,auth_mw.isAdmin],categorycontroller.updateCategory)

    app.delete('/ecomm/api/v1/category/delete',[auth_mw.verifytoken,auth_mw.isAdmin],categorycontroller.deleteCategory)
}