const express = require('express');
const router = express.Router();
const carSchema = require('../models/carModal'); // Ensure correct path to the Car model

// Add a new car
exports.addcar = async (req, res) => {

    try {
        const { mmy,license, rentRate, location} = req.body;
        const newCar = new carSchema({ mmy,license, rentRate, location});
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        console.error('Error adding car:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.isBooked = async (req, res) => {
    try {
        const carId = req.params.id;  // Assuming the car ID is passed as a parameter
        const car = await carSchema.findById(carId);
        
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }

        // Assuming you have a `booked` field in your schema (boolean or status field)
        const isBooked = car.booked ? true : false;
        
        res.json({ isBooked });
    } catch (error) {
        console.error('Error checking booking status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};