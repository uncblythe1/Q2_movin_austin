const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.get('/truck_rentals', (req, res, next) => {
  knex('truck_rentals')
    .orderBy('rental_id')
    .then((trucks) => {
        res.render('truck_rentals', {trucks});
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});

module.exports = router;