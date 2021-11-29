const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    company_name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: true,
    },
    job_description: { type: 'string', required: true },
    work_from_home: { type: 'boolean', required: true },
    noticeperiod: { type: 'number', required: true },
    rating: { type: 'number', required: true },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city",
        required: true,
    },
},
    {
        versionKey: false,
        timestamps: true,
    });

module.exports = mongoose.model('job', jobSchema);