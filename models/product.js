const mongoose = require('mongoose')

const SchemaTypes = mongoose.Schema.Types;
const productSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    gst: {
        required: true,
        type: Number
    },
    hsn: {
        required: false,
        type: String
    },
    tracking: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('product', productSchema)