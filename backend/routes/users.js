const express = require('express');
const router = express.Router();
const User = require('../Model/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // Fixed here
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const newUser = new User({ // Changed from user to User
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await newUser.save(); // Changed to newUser
        res.status(201).json(savedUser); // Changed to savedUser
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
