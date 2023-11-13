const jwt = require('jsonwebtoken')
const { User } = require ("../models/user")

const authenticationUser = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const token = auth?.slice(7);
        if(!token){
            throw {name: "unauthorized", message: "user tidak memiliki akses"};
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            throw {name: "unauthorized", message: "user tidak memiliki akses"};
        }
        
        const user = await User.findByPk(decoded.id)
        req.user = user;
        next()
    }catch (error){
        next(error);
    }
}


module.exports = {authenticationUser};