const { Profile, User } = require('../models')
var bcrypt = require('bcryptjs');


class Controller {

    // halaman buat login
    static async loginPage(req, res) {
        try {
            const { error } = req.query
            let data = await Profile.findAll()
            res.render('login', { data ,error})
        } catch (error) {

            console.log(error);
            res.send(error)
        }
    }
    static async loginPagePost(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ where: { username } });
            
            // console.log('Username:', username);
            // console.log('Password:', password);

            if (user) {
                const isValidPassword = bcrypt.compareSync(password, user.password)
                if (isValidPassword) {
                    req.session.UserId = user.id
                    res.redirect('/mainPage');



                    // console.log('Session User ID:', req.session.UserId)
                } else {
                    const error = 'Invalid username or password';
                    return res.redirect(`/login?error=${error}`);
                }
            } else {
                const error = 'Invalid username or password';
                return res.redirect(`/login?error=${error}`);
            }
        } catch (error) {
            res.send(error)
        }
    }




    // Register
    static async registerPage(req, res) {
        try {
            let { errors } = req.query;
            if (errors) {
                errors = errors.split(',');
            }

            // res.send(errors)
            res.render('register', { errors })

        } catch (error) {
            console.log(error);

            res.send(error)
        }
    }

    static async registerPagePost(req, res) {
        try {
           let role = 'user'
            const { username, email, password} = req.body
            await User.create({ username, email, password, role })

            res.redirect('/login')
        } catch (error) {
            console.log(error);
            
            if (error.name === "SequelizeValidationError") {
                // res.send(error) 

                const erorrs = error.errors.map((el) => el.message)

                res.redirect(`/register?errors=${erorrs}`)
            } else {
                res.send(error)
            }



        }
    }


    static async mainPage(req,res){
        try {
            res.render('mainPage')
        } catch (error) {
            res.send(error)
        }
    }
}


module.exports = Controller