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
router.post('/todoApp', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });

        }
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.json({
            username: user.username,
            message: `Hello,${user.username}!`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
