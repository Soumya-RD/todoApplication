const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Fixed here
        unique: true
    },
    email: {
        type: String,
        required: true, // Fixed here
        unique: true
    },
    password: {
        type: String,
        // required: true, // Fixed here
    }
}, { timestamps: true }); // Added timestamps

module.exports = mongoose.model('User', userSchema);
