const jwt = require('jsonwebtoken');
const User = require("../model/userModel");

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ status: 401, message: "Authorization failed:Token missing" })
        };
        const verifyOptions = {
            expiresIn: '1d'
        };
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY, verifyOptions); 

        const rootUser = await User.findOne({ _id: verifytoken._id });
        if (!rootUser) {
            res.status(401).json({ status: 401, message: "Authorization failed: User not found" });
        }
        req.token = token;
        req.id = rootUser._id;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ status: 401, message: "Authorization failed: Invalid token" });
    }
};
