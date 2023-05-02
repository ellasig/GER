'use strict';
const sharp = require('sharp');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const router = express.Router();

const makeThumbnail = async (file, thumbname) => {
    await sharp(file)
        .resize(160)
        .png()
        .toFile(`thumbnails/${thumbname}`);
};

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        // accept file
        cb(null, true);
    } else {
        // reject file
        cb(null, false);
    }
};

const upload = multer({dest: 'uploads/', fileFilter});

router.post('/upload', upload.single('image'), async (req, res) => {
    const file = req.file.path; // get the full path of the uploaded file
    const thumbname = req.file.filename; // get the filename of the uploaded file
    await makeThumbnail(file, thumbname); // call the makeThumbnail function
    // move the uploaded file to the uploads directory
    fs.rename(file, `uploads/${thumbname}`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error uploading file');
        } else {
            res.status(201).send('File upload successful');
        }
    });
});

/*
router.post('/upload', upload.single('image'), function(req, res) {

    res.status(201).send("File upload successful");
});
*/

module.exports = router;