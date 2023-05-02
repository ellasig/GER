const express = require('express');

const conn = require("./mysql");
const {stringify} = require('nodemon/lib/utils');
const router = express.Router();

const {userID,contentID,userRating} = require('../js/home.js');

//   Adds liked content to favorites.
router.post('/rateContent', function(req, res) {

    let sql = "INSERT INTO user_content (user_id, content_id, user_rating) VALUES (?,?,?)";
    let values = [userID, contentID, userRating];
    conn.query(sql, values, function (err, result) {
        if (err) {
            res.status(400).send({
                text: "Error rating content"
            });
        } else {
            res.status(200).send("rating successful");
        }
    });
});
//   Removes content from favorites
router.delete('/unrateContent', function (req, res) {

    let sql = "DELETE FROM user_content WHERE user_id = ? AND content_id = ?";
    let values = [userID, contentID];
    conn.query(sql, values, function (err, result) {
        if (err) {
            res.status(400).send({
                text: "Error deleting user_content"
            });
        } else {
            res.status(200).send("unrating successful");
        }
    });
});
//   Selects favorite content.
router.get('/getFavorites', function (req, res) {

    let sql = "SELECT * FROM user_content WHERE user_id = ?";
    let values = [userID];
    conn.query(sql, values, function (err, result) {
        if (err) throw err;
        else {
            res.status(200).json(result);
        }
    });
});

module.exports = router;