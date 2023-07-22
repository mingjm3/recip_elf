const winston = require('winston')
const morgan = require('morgan')
const os = require('os')
const { combine, timestamp, json } = winston.format

const logger = winston.createLogger({
    format: combine(timestamp(), json()),
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
            colorize: true
        }),
        new (winston.transports.File)({
            filename: process.env.NODE_ENV === 'production' ? '/recip_elf/logs/recipelf.log' : './recipelf.log'
        })
    ]
});

module.exports.logCluster = (cluster) => {
    cluster.meshes = cluster.meshes.map(mesh => mesh.id)
    return cluster
}

/**
 * logging middleware, passes morgan output to winston.
 * See guide: https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/
 */
module.exports.logMiddleWare = morgan(
    function (tokens, req, res) {
        return JSON.stringify({
            method: tokens.method(req, res),
            url: tokens.url(req, res),
            status: Number.parseFloat(tokens.status(req, res)),
            content_length: tokens.res(req, res, 'content-length'),
            response_time: Number.parseFloat(tokens['response-time'](req, res)),
        });
    },
    {
        stream: {
            write: (message) => {
                const data = JSON.parse(message)
                logger.info('incoming-request', data)
            }
        },
    }
);

module.exports.logger = logger
