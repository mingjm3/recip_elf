// shamelessly stolen from: https://medium.com/@aleksandrasays/sending-magic-links-with-nodejs-765a8686996
const express = require('express');
const router = express.Router();
const { generate } = require('../lib/auth')

router.post('/login', (req, res, next) => {
    // 
    const { email } = req.body;
    if (!email) {
        return res.status(400).send({ error: 'email is required'})
    }
    const token = generate(email)
})
