const { User } = require ("../models/user")
const { verifyToken } = require("../jwt/index");

const isAdmin = (req, res, next) => {
    try{
        const {isAdmin} = req.user;
        if (!isAdmin) {
            return res
            .status(401)
            .json({message: "anda tidak punya akses"})
        }
    }catch (error){
        next(error);
    }
}

const isOwned = (req, res, next) => {
    try{
        const {isOwned} = req.user;
        if (!isOwned) {
            return res
            .status(401)
            .json({message: "anda tidak punya akses"})
        }
    }catch (error){
        next(error);
    }
}

const isBuyer = (req, res, next) => {
    try{
        const {isBuyer} = req.user;
        if (!isBuyer) {
            return res
            .status(401)
            .json({message: "anda tidak punya akses"})
        }
    }catch (error){
        next(error);
    }
}

module.exports = {isAdmin, isBuyer, isOwned};