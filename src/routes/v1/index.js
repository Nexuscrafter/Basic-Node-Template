const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();

// InfoController.info is a method reference to the info method in the InfoController
router.get('/info', InfoController.info); // Direct all requests to /api/v1/info to the info method in the InfoController 

module.exports = router;