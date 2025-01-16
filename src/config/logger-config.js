const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;

const customFormat = printf(({level, message, timestamp}) => {
    return `${timestamp} ${level}: ${message}`; // Define the log format
});

//Logging is a crucial part of any application. It helps in debugging and monitoring the application.
// Timestamp: The time at which the log was created
// Label: The label of the log -> from which file the log was created
// Level: The level of the log -> info, error, warn, etc.
// Message: The message to be logged

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), // Add the timestamp to the logs
        customFormat // Use the custom format defined above
    ),
    transports: [
        new transports.Console(), // Log to the console
        new transports.File({filename: 'combined.log'}) // Log to the file
    ]

});

module.exports = logger; 