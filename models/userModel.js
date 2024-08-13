const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter username"],
        unique: [true,"Username should be unique"]
    },
    password: {
        type: String,
        required: [true,"Enter password"],
    }
})

module.exports = mongoose.model('user',userSchema);