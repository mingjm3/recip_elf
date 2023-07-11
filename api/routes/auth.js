const express = require('express');
const router = express.Router();
const { generate } = require('../lib/auth/jwt')
const { hash, verify, validateEmail, validatePassword } = require('../lib/auth/password')

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const SIGNUP_FAILURE_RESPONSE = { error: "can't create account" }
const LOGIN_FAILURE_RESPONSE = { error: "can't login" }

router.get('/', (req, res) => {
    res.status(200).json({ message: "success" })
})

router.post('/signup', async (req, res, next) => {
    console.log(req.body)
    const { name, email, password, dietaryRestrictions } = req.body
    let user = await prisma.user.findFirst({
        where: { email }
    })
    if (user) {
        console.log('found existing user')
        return res.status(400).json(SIGNUP_FAILURE_RESPONSE)
    }
    if (!validateEmail(email)) {
        console.log('email validation failed')
        return res.status(400).json(SIGNUP_FAILURE_RESPONSE)
    }
    if (!validatePassword(password)) {
        console.log('password validation failed')
        return res.status(400).json(SIGNUP_FAILURE_RESPONSE)
    }
    const hashedPassword = await hash(password)
    const existingRestrictions = prisma.dietaryRestriction.findMany({
        where: {
            name: {
                hasAny: dietaryRestrictions
            }
        }
    })
    // https://stackoverflow.com/questions/68874214/how-to-use-connectorcreate-with-many-to-many-in-prisma
    user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            dietaryRestrictions: {
                connectOrCreate: dietaryRestrictions.map(name => {
                    return {
                        where: { name },
                        create: { name }
                    }
                })
            }
        }
    })
    const token = generate(email)
    return res.status(200).json({ token, profile: { name, email, dietaryRestrictions } })
})

router.post('/login/credential', async (req, res) => {
    console.log('here')
    const { email, password } = req.body
    if (!validateEmail(email)) {
        return res.status(400).json(LOGIN_FAILURE_RESPONSE)
    }
    if (!validatePassword(password)) {
        return res.status(400).json(LOGIN_FAILURE_RESPONSE)
    }
    let user = await prisma.user.findFirst({
        where: { email }
    })
    if (!user) {
        return res.status(400).json(LOGIN_FAILURE_RESPONSE)
    }
    if (!await verify(user.password, password)) {
        return res.status(400).json(LOGIN_FAILURE_RESPONSE)
    }
    const token = generate(email)
    return res.status(200).json({ token, profile: { name: user.name, email: user.email, allergies: user.allergies } })
})

router.post('/login/magic', async (req, res) => {
    return res.status(200).json({ message: 'coming soon' })
})

module.exports = router
