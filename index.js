'use strict';
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.static('/home/jerehip/web-assignments'));
//const dotenv = require('dotenv')
//dotenv.config()

const port = 3000;

app.use(express.json());

const contentAction = require("./routes/contentAction");
const ratingAction = require("./routes/ratingAction")
const userAction = require("./routes/userAction")

const serverRoutes = [contentAction, ratingAction, userAction];

app.use("/", serverRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

