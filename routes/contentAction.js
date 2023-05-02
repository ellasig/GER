const express = require('express');

const conn = require("./mysql");
const {stringify} = require('nodemon/lib/utils');
const router = express.Router();

//endpoints
router.get('/getMovies', function (req, res) {
  let sql = "SELECT * FROM content WHERE type = 'movie'";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});

router.get('/getTVshows', function (req, res) {
  let sql = "SELECT * FROM content WHERE type = 'TVshow'";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});

router.get('/getAllcontent', function (req, res) {
  let sql = "SELECT * FROM content";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});

//gets specificcontent from db
router.get('/getSpecificcontent', function (req, res) {
  let q = req.query.name;
  let sql = "SELECT * FROM content WHERE name LIKE '%" + q + "%'";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});


// All three actions ADMIN user can make
// TODO MAKE AUTHENTICATION REQUIREMENT

router.delete('/deleteContent', function (req, res) {
    let q = req.query.name;
    let sql = "DELETE FROM content WHERE name = '" + q + "'";

    conn.query(sql, function (err, result) {
      if (err) {
        res.status(400).send({
          text: "Error deleting content"
        });
      } else {
        res.status(200).send("DELETE successful");
      }
    });
});

router.patch('/editContent', function (req, res) {
  let q = req.query.name;
  let sql = "UPDATE content SET name=?, description=?, genre=?, type=?, length=?, image=? WHERE name = '" + q + "'";

  conn.query(sql, [req.body.name, req.body.description, req.body.genre, req.body.type, req.body.length, req.body.image], function (err, result) {
    if (err) {
      res.status(400).send({
        text: "Error editing content"
      });
    } else {
      res.status(200).send("PATCH successful");
    }
  });
});

router.put('/addContent', function (req, res) {
  let sql = "INSERT INTO content (name, description, genre, type, length, image) VALUES (?,?,?,?,?,?)";

  conn.query(sql, [req.body.name, req.body.description, req.body.genre, req.body.type, req.body.length, req.body.image], function (err, result) {
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