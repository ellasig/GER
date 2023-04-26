const express = require('express');

const conn = require("./mysql");
const {stringify} = require('nodemon/lib/utils');
const router = express.Router();

router.put('/rateContent', function(req, res) {
    let sql = "INSERT INTO user_content (user_id, content_id, user_raiting) VALUES (?, ?, ?)";

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


module.exports = router;