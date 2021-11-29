const express = require('express');
const mongoose = require('mongoose');
const port = 1180;

const app = express();
app.use(express.json());

const job = require("./controller/job.controller");
const company = require("./controller/company.controller");
const city = require("./controller/city.controller");
const skill = require("./controller/skill.controller");


app.use('/job', job);
app.use('/company', company);
app.use('/city', city);
app.use('/skill', skill);




const connect = (() => {
    return mongoose.connect("mongodb://localhost:27017/job");
})


app.listen(port, async () => {
    await connect();
    console.log(`started at http://localhost:${port}`);
});