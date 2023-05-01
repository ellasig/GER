const express = require('express');

const conn = require("./mysql");
const {stringify} = require('nodemon/lib/utils');
const router = express.Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const {user} = require('../../config/db_config');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.put('/addUser', upload.single('image'), function (req, res) {
  bcrypt.hash(req.body.pass, 10, function(err, hash) {
    const pathPrefix = "http://localhost:5000/";
    let sql = "INSERT INTO users (username, email, pass, profile_pic, isAdmin) VALUES (?,?,?,?,0)";

    let profilePic = pathPrefix + req.file.filename;

    try {
      conn.query(sql, [req.body.username, req.body.email, hash, profilePic], function (err) {
        if (err) {
          res.status(400).send({
            text: "Error adding user"
          });
        } else {
          res.status(200).send("POST successful");
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
});

router.get('/getUserProfile', function(req, res) {
  let q = req.query.name;
  let sql = "SELECT username, profile_pic FROM users WHERE user_id = '" + q + "'";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});


// TODO Modify edit to hash pass
router.patch('/editUser', upload.single('image'), function (req, res) {
  const pathPrefix = "http://localhost:5000/";
  let sql = "INSERT INTO users (username, email, pass, profile_pic, isAdmin) VALUES (?,?,?,?,0)";

  let profilePic = pathPrefix + req.file.filename;

  let hashPass = req.body.pass;

  conn.query(sql, [req.body.username, req.body.email, hashPass, profilePic], function (err, result) {
    if (err) {
      res.status(400).send({
        text: "Error editing user"
      });
    } else {
      res.status(200).semd("PATCH successful");
    }
  });
});

router.get('/authenticateUser', function(req, res) {
  let auth = authenticate(req.body.accessToken);
  if(auth === 2) {
    res.status(200).json({text: "User is admin", admin: 1});
  } else if (auth === 1) {
    res.status(200).json({text: "User is authenticated", admin: 0});
  } else {
    res.status(401).send("User not authenticated");
  }

});

router.post('/loginUser', async function(req, res) {
  const userPass = await getHash(req.body, res);
  if (userPass === 400) {
    res.status(400).send("Error signing in");
  } else {
    bcrypt.compare(req.body.pass, userPass.pass, function(err, result) {
      let sec;
      if (result) {
        (userPass.isAdmin === 1) ? sec = process.env.TOKEN_ADMIN : sec = process.env.TOKEN_SECRET;
        const accessToken = jwt.sign({name: req.body.username}, sec, {expiresIn: "1h"});
        res.status(200).json({accessToken:accessToken});
      } else {
        res.status(400).send("Error signing in")
      }
    });
  }
});

function getHash(body) {
  let sql = "SELECT pass, isAdmin FROM users WHERE username = " + mysql.escape(body.username);

  // Returns a promise with hash
  return new Promise(function (resolve) {
    conn.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length === 0) {
        resolve(400);
      } else {
        resolve(result[0]);
      }
    });
  });
}

function authenticate(token) {
  return jwt.verify(token, process.env.TOKEN_ADMIN, function(err, decoded) {
    if (decoded !== undefined) return 2
    else {
      return jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
        if (decoded !== undefined) return 1
        else return 0
      });
    }
  });


}

module.exports = router;