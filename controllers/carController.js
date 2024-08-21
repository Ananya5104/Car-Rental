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
exports.isBooked = async(req,res)=>{
    const {license} = req.body;
    try{
        let user1 = await carSchema.findByIdAndUpdate(license,{status: 0},{new:true})
    }catch(error){
        console.log(error);
    }
}