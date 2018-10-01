const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.get('/moving_companies', (req, res, next) => {
  knex('moving_companies')
    .orderBy('company_id')
    .then((companies) => {
        res.render('moving_companies', {companies});
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});

module.exports = router;