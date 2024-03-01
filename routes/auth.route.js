const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth_mw')

//signup api - localhost:8080/ecomm/api/v1/auth/signup
module.exports = (app) =>{
    app.post("/ecomm/api/v1/auth/signup",[authMiddleware.verifySignupbody],authController.signup)

    app.post("/ecomm/api/v1/auth/signin",[],authController.signin)
}

