const { Schema, model } = require('mongoose');
const orderSchema = new Schema({
    width:{
        type: Number,
        required: true,
    },
    height:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    text:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
        trim: true,
    },

})

const Order = model('Order', orderSchema);

module.exports = Order;