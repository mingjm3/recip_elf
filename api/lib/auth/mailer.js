// shamelessly stolen from: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'REGION' });
const SES = AWS.SES({ apiVersion: '2010-12-01' })

const SENDER_EMAIL = 'auth@recipelf.com'

/**
 * sends an email
 * @param {string} to email address of recipient
 * @param {string} body email address of recipient
 * @returns {Promise}
 */
module.exports.sendMail = async (to, body) => {
    const params = {
        Destination: { /* required */
            ToAddresses: [
                to,
                /* more items */
            ]
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: "HTML_FORMAT_BODY"
                },
                Text: {
                    Charset: "UTF-8",
                    Data: body
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Log in to RecipElf'
            }
        },
        Source: SENDER_EMAIL, /* required */
        ReplyToAddresses: [
            SENDER_EMAIL
        ],
    };

    // Create the promise and SES service object
    return await SES.sendEmail(params).promise();
}
