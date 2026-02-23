const express = require('express');
const User = require('../model/user'); 
const router = express.Router();


router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        return res.status(201).json({ message: "registration successful" });
    } catch (error) {
        return res.status(400).json({ message: "registration failed", error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });


        if (!user) {
            return res.status(404).json({ message: 'user not found!' }); 
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'invalid password' });
        }
        
        
        return res.status(200).json({ message: 'login successful' });

    } catch (e) {
        
        return res.status(500).json({ message: e.message });
    }
});

module.exports = router;