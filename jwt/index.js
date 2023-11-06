const { sign, verify } = require("jsonwebtoken")

const createToken = (user) => {
    const accessToken = sign(
        {name: user.name, email: user.email},
        "jwtsecret"
    );
    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["accesstoken"];

    if(!accessToken)
    return res.status(400).json({error : "user not authenticated"});

    try{
        const validateToken = verify(accessToken, "jwtsecret");
        if (validateToken) {
            req.authenticated = true;
            return next();
        }
    }catch(error){
        return res.status(400).json({error: error})
    }
};

module.exports = {createToken, validateToken};