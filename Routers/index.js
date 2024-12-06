const express = require('express')
const Controller = require('../Controllers/controller')
const router = express.Router()



router.get('/login',Controller.loginPage)


router.get('/register',Controller.registerPage)
router.post('/register',Controller.registerPagePost)








module.exports = router