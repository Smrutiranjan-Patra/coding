const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    city: {type: 'string', required: true},
},
{
    versionKey : false,
    timestamps : true,
});


module.exports = mongoose.model("city", citySchema);