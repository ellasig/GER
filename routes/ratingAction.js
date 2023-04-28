const express = require('express');

const conn = require("./mysql");
const {stringify} = require('nodemon/lib/utils');
const router = express.Router();

router.put('/rateContent', function(req, res) {
    const userID = require('./home.js');
    const contentID = require('./home.js');
    const userRating = require('./home.js');
    let sql = "INSERT INTO user_content (user_id, content_id, user_rating) VALUES (userID, contentID, userRating)";

    conn.query(sql, [req.body.user_id, req.body.content_id, req.body.user_rating], function (err, result) {
        if (err) {
            res.status(400).send({
                text: "Error adding content"
            });
        } else {
            res.status(200).send("POST successful");
        }
    });
});

router.delete('/unrateContent', function (req, res) {
    let q = req.query.name;
    let sql = "DELETE FROM user_content WHERE content_id = '" + q + "'";

    conn.query(sql, function (err, result) {
        if (err) {
            res.status(400).send({
                text: "Error deleting user_content"
            });
        } else {
            res.status(200).send("DELETE successful");
        }
    });
});

router.get('/getFavorites', function (req, res) {
    let sql = "SELECT * FROM user_content";

    conn.query(sql, function (err, result) {
        if (err) throw err;
        else {
            res.status(200).json(result);
        }
    });
});


module.exports = router;