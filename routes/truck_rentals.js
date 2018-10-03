const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/new_rental', (req, res, next) => {
  res.render('adminViews/new_rental');
});



router.get('/truck_rentals', (req, res, next) => {
  knex('truck_rentals')
    .orderBy('rental_id')
    .then((trucks) => {
        res.render('userViews/truck_rentals', {trucks});
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});

router.get('/admin/truck_rentals', (req, res, next) => {
  knex('truck_rentals')
    .orderBy('rental_id')
    .then((trucks) => {
        res.render('adminViews/admin_truck_rentals', {trucks});
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});

router.get('/admin_trucks/:rental_id', (req, res, next) => {
  knex('truck_rentals')
  .where('rental_id',req.params.rental_id)
  .then((trucks) => {
    if(!trucks) {
      return next();
    }
    res.render('adminViews/update_rentals', {trucks});
})
  .catch((err) => {
    next(err);
  })
})

router.post('/truck_rentals', (req, res, next) => {

  knex('truck_rentals')
    .insert({ 
      logo: req.body.logo,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      yelpRating: req.body.yelpRating, 
      yelpReviews: req.body.yelpReviews }, '*')
    .then(() => {
      knex('truck_rentals')
      .orderBy('rental_id')
      .then(() => {
      res.redirect(302, '/userViews/truck_rentals');
    })
  })
    .catch((err) => {
      res.status(302).json({
        status: 'error',
        data: err
      });
    });
});

router.patch('/update_rentals/:rental_id', (req, res, next) => {
  knex('truck_rentals')
    .where('rental_id', req.params.rental_id)
    .then(() => {
       knex('truck_rentals')
        .update({ 
        logo: req.body.logo,
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        yelpRating: req.body.yelpRating, 
        yelpReviews: req.body.yelpReviews }, '*')
        .where('rental_id', req.params.rental_id)
        .then((trucks) => {
          res.render('userViews/truck_rentals', {trucks});
        })
        .catch((err) => {
          next(err);
        });
    })
});

router.delete('/admin_trucks/:rental_id', function(req, res) {
  let row;
  knex('truck_rentals')
    .where('rental_id', req.params.rental_id)
    .then((trucks)=> {
      row = trucks;
      return knex('truck_rentals')
      .del()
      .where('rental_id', req.params.rental_id);
    })
    .then(() => {
      delete row.rental_id;
      knex('truck_rentals')
          .orderBy('rental_id')
          .then((trucks) => {
      res.render('adminViews/admin_truck_rentals', {trucks});
    })
  })
    
    .catch(function(err) {
      
      res.sendStatus(500);
    });
});

module.exports = router;