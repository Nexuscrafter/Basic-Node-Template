const { StatusCodes } = require('http-status-codes'); // Import the statusCodes object from the http-status-codes package to get the status codes

const info = (req, res) => {
    return res.status(StatusCodes.OK).json({ 
        success: true,
        message: "API is live",
        error:{},
        data: {}
    });
}

module.exports = {
    info // Export the info function enclosed in an object
}