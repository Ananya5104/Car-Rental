const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
         
    },
    username :{
        type: String,
        
    },
    contact:{
        type: String,
         
    },
    password: {
        type: String,
         
    },

    role: {
        type: String,
        enum: ['user', 'Admin'],
        default:'user'
    }
});

module.exports = mongoose.model("users",userSchema);