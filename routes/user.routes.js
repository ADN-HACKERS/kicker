const router =require('express').Router()
const authController=require('../controllers/auth.controller')
const userController = require('../controllers/user.controller.js')  
// Authentification
router.post("/register",authController.signUp)
// User db

router.get('/',userController.getAllUsers);

























module.exports=router;