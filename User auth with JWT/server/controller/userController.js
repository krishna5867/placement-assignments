const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

// Test -> GET METHOD
exports.test = (req, res) => {
    res.send("Hello World")
}

// Register User -> POST METHOD
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            throw new Error('Name, Email and password is required')
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User all ready exist")
        }
        const encryptPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: encryptPassword,
        })
        const token = jwt.sign({ user_id: user._id, email },
            process.env.SECRET_KEY,
            { expiresIn: '4hr' })

        user.token = token;
        user.password = undefined;
        await user.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Something Wrong"
        })
    }
}

// Login User -> POST METHOD
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Email and password is required')
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User Not Found in database")
        }
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ user_id: user._id, email, },
                process.env.SECRET_KEY,
                {
                    expiresIn: '1h'
                }
            );
            user.token = token;
            await user.save();

            const options = {
                expires: new Date(Date.now() + 4 * 24 * 3600000),
                httpOnly: true
            }
            res
                .cookie(token, options)
                .status(200).json({
                    success: 'true',
                    message: "Login Successfull",
                    user,
                    token
                })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Invalid Crendincial"
        })
    }
}

// Check valid User -> Get Method
exports.islogged = async(rez, res) => {
    try {
        const user = await User.findOne({ _id: req.id });

        if(user){
            res.send(200).json({
                success: true,
                message: "User is Valid",
                user
            })
        }
    } catch (error) {
        console.log(error);
    }
}

// Get All Users -> GET METHOD
exports.getUser = async (req, res) => {
    try {
        const user = await User.find({});
    if(user){
        res.status(200).json({
            user
        })
    }
    } catch (error) {
        console.log(error);
    }
}
