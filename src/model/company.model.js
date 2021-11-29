const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    company_name: {type: 'string', required: true},
});


module.exports = mongoose.model("company", companySchema);