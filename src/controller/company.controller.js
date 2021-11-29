const express = require('express');
const company = require('../model/company.model');

const router = express.Router();


router.post('', async (req, res) => {
    try {
        const output = await company.create(req.body);
        return res.status(201).send(output);
    }
    catch (err) {
        res.status(500).json({ err: err.message, status: "failed" });
    }
});


router.get('/', async (req, res) => {
    try {
        const output = await company.find();
        res.status(201).send(output);
    }
    catch (err) {
        res.status(500).json({ err: err.message, status: "failed" });
    }
})

module.exports = router;