const express = require('express');
const job = require('../model/job.model');
const company = require('../model/company.model');
const city = require('../model/city.model');
const skill = require('../model/skill.model');

const router = express.Router();


router.post('', async (req, res) => {
    try {
        const output = await job.create(req.body);
        return res.status(201).send(output);
    }
    catch (err) {
        res.status(500).json({ err: err.message, status: "failed" });
    }
});


router.get('/', async (req, res) => {
    try {
        const output = await job.find().populate({ path: "company_name", select: "company_name" })
        .populate({ path: "city", select: "city" }).populate({ path: "skill", select: "skill" }).lean().exec();
        res.status(201).send(output)
    }
    catch (err) {
        res.status(500).json({ err: err.message, status: "failed" });
    }
})

module.exports = router;