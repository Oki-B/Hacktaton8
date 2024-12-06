const {Profile,User} = require('../models')


class Controller{

    // halaman buat login
    static async loginPage(req,res){
        try {
            let data = await Profile.findAll() 
           res.render('login',{data})
        } catch (error) {
            
            console.log(error);
            res.send(error)
        }
    }

    // Register
    static async registerPage(req,res){
        try {

            res.render('resgister')
            
        } catch (error) {
            console.log(error);
            
            res.send(error)
        }
    }

    static async registerPagePost(req,res){
        try {


            await User.create(req.body)
            res.redirect('/login')
        } catch (error) {
            res.send(error)
        }
    }
}


module.exports=Controller