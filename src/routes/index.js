const express = require('express');

const v1Routes = require('./v1'); // Import the v1Routes from the v1 file

const router = express.Router(); // Create a new router object which is a middleware and routing system for given file

router.use('/v1', v1Routes); // Direct all requests to /api/v1 to the v1Routes

module.exports = router; // Export the router object