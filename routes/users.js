const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');

router.post('/users', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hash) => {
      return knex('users')
        .insert({
          email: req.body.email,
          hashed_password: hash
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      res.render('adminViews/admin_home');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/diy', (req, res, next) => {
  res.render('userViews/diy');
})


module.exports = router;