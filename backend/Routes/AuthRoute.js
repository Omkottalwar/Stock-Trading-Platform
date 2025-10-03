const { Signup, Login } = require('../Controller/AuthController')
const {userVerification}=require("../Middleware/AuthMiddleware")
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)

module.exports = router