const  User  = require("../models/user");

class UserController {
    static async register(req, res, next) {
        try {
            const regis = await User.register(req.body);
            res.status(201).json({
                account: {
                    id: regis.id,
                    name: regis.name,
                    email: regis.email,
                    password: regis.password,
                },
            });
        } catch (error) {
            next(error);
        }
    };

    static async login(req, res) {
        try {
            const regis = await User.login(req.body);
            res.status(200).json({
                account: regis,
            })
        } catch (error) {
            next(error);
        }    
    }

    static async getAllUser(req, res, next) {
        try {
            const user = await User.findAll()
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;