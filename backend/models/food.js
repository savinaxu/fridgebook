const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expireDate: {
        type: Date
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Food = mongoose.model("Food", foodSchema);

module.exports = Food