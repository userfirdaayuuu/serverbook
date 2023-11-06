const { User } = require("../models");
const bcrypt = require("bcrypt");
const { createToken, validateToken } = require("../jwt/index")

class UserController {
    static async register(req, res) {
        const { name, email, password, isAdmin, isBuyer, isOwned } = req.body;
        // const isExist = await User.findOne({ where: { email } });
        // if (isExist) {
        //     throw new ResponseError(400, "Email sudah terdaftar");
        // }
        bcrypt.hash(password, 10).then((hashPassword) => {
            User.create({
                name: name,
                email: email,
                password: hashPassword,
                isAdmin: isAdmin,
                isOwned: isOwned,
                isBuyer: isBuyer,
            })
                .then(() => {
                    res.json("user registered");
                })
                .catch((err) => {
                    if (err) {
                        res.status(400).json({ error: err });
                    }
                });
        })
    }

    static async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email }
        });
        if (!user) {
            return res.status(400).json({ message: "email/password salah" })
        };
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res
                    .status(400)
                    .json({ error: "wrong username and password" });
            } else {
                const accessToken = createToken(user);

                res.cookie("accesstoken", accessToken, {
                    maxAge: 60 * 60 * 24 * 1000,
                    httpOnly: true,
                });
                res.json("logged in");
            }
        })
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