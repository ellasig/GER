const express = require('express');

const pool = require("../routes/mysql");
const {stringify} = require('nodemon/lib/utils');
const router = express.Router();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const {user} = require('../config/db_config');
const conn = require("./mysql");

const {emailInput, usernameInput} = require('../js/signupPage.js');

router.post('/addUser', function (req, res) {
    let sql = "INSERT INTO users (user_id, username, email, pass, isAdmin) VALUES (?,?,?,?,0)";
    try {
      pool.query(sql, [null, req.body.username, req.body.email, req.body.password], function (err) {
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

router.get('/checkEmail', async function (req, res) {
  let sql = "SELECT * FROM users WHERE email = ?";
  let value = [emailInput];
  conn.query(sql, value, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});

router.get('/checkUsername', async function (req, res) {
  let sql = "SELECT * FROM users WHERE username = ?";
  let value = [usernameInput];
  conn.query(sql, value, function (err, result) {
    if (err) throw err;
    else {
      res.status(200).json(result);
    }
  });
});

// TODO Modify edit to hash pass
router.patch('/editUser', function (req, res) {
  let sql = "INSERT INTO users (username, email, pass) VALUES (?,?,?,0)";
  let hashPass = req.body.pass;

  hashPass = hashPass;

  pool.query(sql, [req.body.username, req.body.email, hashPass], function (err, result) {
    if (err) {
      res.status(400).send({
        text: "Error editing user"
      });
    } else {
      res.status(200).send("PATCH successful");
    }
  });
});

router.get('/authenticateUser', function(req, res) {
  let auth = authenticate(req.body.accessToken);
  console.log(auth === 1);
  if(auth === 2) {
    res.status(200).json({text: "User is admin", admin: 1});
  } else if (auth === 1) {
    res.status(200).json({text: "User is authenticated", admin: 0});
  } else {
    res.status(401).send("User not authenticated");
  }

});

// User authentication
const getUserLogin = async (email) => {
  try {
    console.log('get user login for ', email);
    const [rows] = await promisePool.execute(
        'SELECT * FROM user WHERE email = ?;',
        [email]
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

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
    pool.query(sql, function (err, result) {
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