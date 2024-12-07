const { Profile, User } = require('../models')
var bcrypt = require('bcryptjs');


class Controller {

    // halaman buat login
    static async loginPage(req, res) {
        try {
            const { error } = req.query
            let data = await Profile.findAll()
            res.render('login', { data, error })
        } catch (error) {
            // console.log(error);
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
                const error = 'Username is not found, please create account';
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
            res.render('register', { errors })

        } catch (error) {
            res.send(error)
        }
    }

    static async registerPagePost(req, res) {
        try {
            let role = 'user'

            const { username, email, password } = req.body
            const user = await User.findOne({ where: { username } });

            if (user) {
                const errors = 'Username already exists'
                return res.redirect(`/register?errors=${errors}`);
            }

            // if (password.length < 8) {
            //    const errors = `Password must be more than 8`
            //    return res.redirect(`/register?errors=${errors}`);
            // }

            await User.create({ username, email, password, role })

            res.redirect('/login')
        } catch (error) {
            console.log(error);
            if (error.name === "SequelizeValidationError") {

                const erorrs = error.errors.map((el) => el.message)
                res.redirect(`/register?errors=${erorrs}`)
            } else {
                res.send(error)
            }



        }
    }


    //Main Page
    static async mainPage(req, res) {
        try {
            res.render('mainPage')
        } catch (error) {
            res.send(error)
        }
    }
}


module.exports = Controller