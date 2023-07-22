// shamelessly stolen from: https://medium.com/@aleksandrasays/sending-magic-links-with-nodejs-765a8686996
const jwt = require('jsonwebtoken')
const { logger } = require('../logger')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const ERROR_RESPONSE = { error: 'cannot verify jwt'}

module.exports.generate = (email) => {
    const expiration = new Date()
    expiration.setHours(expiration.getHours() + 1)
    return jwt.sign({ email, expiration }, process.env.JWT_SECRET)
}

/**
 * Express middleware to check auth jwt
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Express.nextCallback} next express callback
 * @returns {void}
 */
module.exports.isAuthed = async (req, res, next) => {
    logger.log("debug", 'isAuthed')
    try {
        const auth = req.headers.authorization;
        if (!auth || !auth.startsWith('Bearer ')) {
            logger.log("debug", 'no token or improperly formatted')
            res.status(403).send(ERROR_RESPONSE)
            return;
        }
    
        const token = auth.substring(7, auth.length);
        logger.log("debug", 'token', { token })
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch {
            logger.log("debug", 'bad decode')
            res.status(403).send(ERROR_RESPONSE)
            return;
        }
        
        if (!decoded.hasOwnProperty('email') || !decoded.hasOwnProperty('expiration')) {
            logger.log("debug", "token doesn't have the correct properties")
            res.status(403).send(ERROR_RESPONSE)
            return;
        }
    
        const { email, expiration } = decoded
        if (expiration < new Date()) {
            logger.log("debug", 'token is expired')
            res.status(403).send(ERROR_RESPONSE)
        }

        const user = await prisma.user.findFirst({ where: { email }})
        if (!user) {
            logger.log("debug", "user doesn't exist")
            res.status(400).send(ERROR_RESPONSE)
        }
    } catch (err) {
        return next(err)
    }
    next()
}
