const express = require("express");
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://saiananyakatakam:NLnqR9ifdN8qbVft@cluster0.lbvmb.mongodb.net/CarRentals"
const allcars = require('../controllers/carController')
const carModal = require('../models/carModal')
const app = express();
app.use(express.json());

mongoose
    .connect(mongoURI)
    .then((res)=> {
        console.log("MongoDB Connected")
    });
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('./landingPage')
})
app.get('/loginPage',(req,res)=>{
    res.render('./loginPage')
})
app.get('/homePage', async(req,res)=>{
    const allcars = await carModal.find({})
    res.render('./homePage',{cars:allcars})
})
app.get('/adminPage', async(req,res)=>{
    const allcars = await carModal.find({})
    res.render('./adminPage',{cars:allcars})
})
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/addcar',async(req,res)=>{
    try {
        const { mmy,license,fuelType, rentRate, location, customerId, status} = req.body;
        const newCar = new carModal({ mmy,license,fuelType, rentRate, location, customerId, status});
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        console.error('Error adding car:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/filterCars', async (req, res) => {
    const { mmy, fuelType, minRent, maxRent } = req.query;

    // Build query object
    let filter = {};

    if (mmy) {
        filter.mmy = { $regex: mmy, $options: 'i' }; // Case-insensitive partial match
    }
    if (fuelType) {
        filter.fuelType = fuelType;
    }
    if (minRent && maxRent) {
        filter.rentRate = { $gte: minRent, $lte: maxRent };
    } else if (minRent) {
        filter.rentRate = { $gte: minRent };
    } else if (maxRent) {
        filter.rentRate = { $lte: maxRent };
    }

    try {
        // Fetch filtered cars from the database
        const filteredcars = await carModal.find(filter);
        res.render('./homePage', {cars:filteredcars }); // Render the filtered list
    } catch (error) {
        console.error('Error filtering cars:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/isbooked',allcars.isBooked);


const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));