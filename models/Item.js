const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemAverseImgPath: {type: String, required: true},
    itemReverseImgPath: {type: String, required: true},
    itemBoxImgPath: {type: String, required: true},
    itemOverviewImgPath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model("Item", itemSchema);