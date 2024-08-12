const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips/:tripCode - finds a trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model.find({ 'code': req.params.tripCode }).exec();

        if (!q || q.length === 0) {
            return res.status(404).json({ message: 'Trip not found' });
        } else {
            return res.status(200).json(q);
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        const q = await newTrip.save();

        return res.status(201).json(q);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

// PUT: /trips/:tripCode - Updates an existing Trip
const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    // console.log(req.params);
    // console.log(req.body);

    try {
        const q = await Model
            .findOneAndUpdate(
                { 'code': req.params.tripCode },
                {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                },
                { new: true } // This option ensures that the returned document is the updated one
            )
            .exec();

        if (!q) {
            // Database returned no data
            return res.status(400).json({ message: 'Trip not found or no update was performed.' });
        } else {
            // Return the resulting updated trip
            return res.status(200).json(q);
        }
    } catch (err) {
        // Handle potential errors
        return res.status(500).json({ message: 'An error occurred while updating the trip.', error: err });
    }

    // Uncomment the following line to show results of the operation
    // on the console
    // console.log(q);
};

module.exports = {
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
