const categorycontroller = require('../controllers/category.controller')
const auth_mw = require('../middlewares/auth_mw')

//localhost:8080/ecomm/api/v1/categories

module.exports = (app)=>{
    app.post('/ecomm/api/v1/categories',[auth_mw.verifytoken,auth_mw.isAdmin],categorycontroller.createNewCategory)
}