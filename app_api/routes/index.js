const express = require('express'); 
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt'); // Updated import for express-jwt

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'], // Specify the algorithm
    userProperty: 'payload'
});

// Import the controllers
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// Define route for our login endpoint
router
    .route('/login')
    .post(authController.login);

// Define route for our register endpoint
router
    .route('/register')
    .post(authController.register);

// Define routes for trips
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip); 

router
    .route('/trips/:tripcode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;
