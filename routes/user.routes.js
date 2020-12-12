const router =require('express').Router()
const authController=require('../controllers/auth.controller')
const userController = require('../controllers/user.controller.js')  
// Authentification
router.post("/register",authController.signUp)
router.post('/login',authController.signIn)
router.get('/logout',authController.logOut)
// User db

router.get('/',userController.getAllUsers);
router.get('/:id',userController.userInfo);
router.put("/:id",userController.updateUser);
router.delete("/:id",userController.deleteUser);
router.patch('/kicker/:id',userController.kicker);
router.patch('/deskicked/:id',userController.deskicked)
























module.exports=router;