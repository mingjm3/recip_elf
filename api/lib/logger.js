const winston = require('winston')
const os = require('os')
const customFormatter = ({ level, message, data }) =>    `[${level}] : ${message} \nData: ${JSON.stringify(data)}}`
const logger = new winston.createLogger({
    format: winston.format.json(),
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
            colorize: true,
            messageFormatter: customFormatter
        }),
        new (winston.transports.File)({
            maxsize: 1000, // bytes
            maxFiles: 1,
            filename: 'recipelf-logs.log'
        })
   ]
});

const logCluster = (cluster) => {
    cluster.meshes = cluster.meshes.map(mesh => mesh.id)
    return cluster
}
module.exports.logCluster = logCluster
module.exports.logger = logger;

