const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is Required"],
    },
    email: {
        type: String,
        require: [true, "Email is Required"],
        unique: true,
    },
    password: {
        type: String,
    },
},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema);