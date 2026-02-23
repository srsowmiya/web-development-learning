const express = require('express');
const User = require('../model/user'); 
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({ name, email, password: hashpassword });
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

        const match = await bcrypt.compare(password, user.password);
        
        if (!match) {
            return res.status(401).json({ message: 'invalid password' });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        return res.status(200).json({ 
            message: 'login successful', 
            token: token 
        });

    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

module.exports = router;