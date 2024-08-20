const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username :{
        type: String,
        required: true,
        unique:true
    },
    contact:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

    image: {
        type: Array,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'Admin'],
        default:'user'
    }
});

module.exports = mongoose.model("users",userSchema);