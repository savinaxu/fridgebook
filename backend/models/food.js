const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
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
    expiration: {
        type: Date
    },
    quantity: {
        type: Number,
        required: true
    },
    freezer: {
        type: Boolean,
        default: false
    }
})

const Food = mongoose.model("Food", foodSchema);

module.exports = Food