const express = require('express'); // Express app
// const router = express.Router();    // Router logic

// Import the controllers
const tripsController = require('../controllers/trips');
const { router } = require('../../app');

// Define route for our trips endpoint
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET method routes tripsFindByCode
    .post(tripsController.tripsAddTrip);  // POST Method Adds a Trip

router
    .route('/trips/:tripcode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
