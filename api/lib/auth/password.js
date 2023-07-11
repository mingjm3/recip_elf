const argon2 = require('argon2');

/**
 * converts plaintext to hash
 * @param {string} plaintext
 * @return {Promise}
 */
module.exports.hash = async (plaintext) => {
    return await argon2.hash(plaintext)
}

/**
 * checks if a plaintext matches a hash
 * @param {string} hash 
 * @param {string} password 
 * @returns {Promise}
 */
module.exports.verify = async (hash, password) => {
    if (await argon2.verify(hash, password)) {
        return true
    } else {
        return false
    }
}

/**
 * checks a plaintext password based on some criteria
 * @param {string} plaintext 
 * @returns {boolean}
 */
module.exports.validatePassword = (plaintext) => {
    if (plaintext.length < 8) {
        return false
    }
    // TODO: check for complexity but allow passphrases
    return true
}

const SUPPORTED_EMAIL_DOMAINS = [
    '@gmail.com',
    '@icloud.com',
    '@outlook.com',
    '@hotmail.com',
    '@yahoo.com',
    '@live.com',
    '@proton.me',
    '@protonmail.com',
    '.edu'
]

/**
 * checks an email based on the OWASP regex
 * https://owasp.org/www-community/OWASP_Validation_Regex_Repository
 * @param {string} email 
 * @returns {boolean}
 */
module.exports.validateEmail = (email) => {
    let supported = false;
    for (let domain of SUPPORTED_EMAIL_DOMAINS) {
        if (email.endsWith(domain)) {
            supported = true
            break;
        }
    }
    if (!supported) {
        return false
    }
    const re = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    if (email.match(re)) {
        return true
    }
    return false
}
