const express = require('express');

const {serverConfig} = require('./config'); // Import the PORT from the config file

const apiRoutes = require('./routes'); // Import the apiRoutes from the routes file

const app = express();

app.use('/api', apiRoutes); // Direct all requests to /api to the apiRoutes

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`); // Log the port the server is running on
    
});