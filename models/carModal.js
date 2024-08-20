const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  mmy: { type: String},
  license: { type: String,unique: true},
  fuelType: {type:String}, 
  rentRate: { type: Number },
  location: { type: String, 
    // required: true 
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
    // required: true
  },
  status: {
    type: Boolean,
    default: 1, //1 is available 0 is booked
    // required: true
}
});

const CarsModel = mongoose.model('cars', carSchema);

module.exports = CarsModel;