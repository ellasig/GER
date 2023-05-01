'use strict';
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.single('image'), function(req, res) {
  res.status(201).send("File upload successful");
});


module.exports = router;