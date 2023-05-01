'use strict';
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname+'/uploads'));

const port = 5000;

app.use(express.json());

const contentAction = require("./routes/contentAction");
const ratingAction = require("./routes/ratingAction");
const userAction = require("./routes/userAction");
const imageAction = require("./routes/imageAction");

const serverRoutes = [contentAction, ratingAction, userAction, imageAction];

app.use("/", serverRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

