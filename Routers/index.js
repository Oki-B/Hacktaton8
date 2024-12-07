const express = require('express')
const Controller = require('../Controllers/controller')
const router = express.Router()



router.get('/login',Controller.loginPage)
router.post('/login', Controller.loginPagePost)



router.get('/register',Controller.registerPage)
router.post('/register',Controller.registerPagePost)


router.use((req, res, next) => {       //global bisa di pakai di semua asalkan di taruh di paling atas
    // console.log('Time:', Date.now())
    // console.log(req.session, '<<<<<<<<<<<<<<<<<<<<<<<< req sesion console');
    if (!req.session.UserId) {
        const error = `You have to login first`
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }    
})    


router.get('/mainPage',Controller.mainPage)









module.exports = router