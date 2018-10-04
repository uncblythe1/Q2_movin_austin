const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/relax', (req, res, next) => {
  res.render('userViews/moving_companies');
})

router.get('/new_company', (req, res, next) => {
  res.render('adminViews/new_company');
});

router.get('/moving_companies', (req, res, next) => {
  knex('moving_companies')
    .orderBy('company_id')
    .then((companies) => {
        res.render('userViews/moving_companies', {companies});
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});

router.get('/admin/moving_companies', (req, res, next) => {
  knex('moving_companies')
    .orderBy('company_id')
    .then((companies) => {
        res.render('adminViews/admin_moving_companies', {companies});
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
});

router.post('/admin/moving_companies', (req, res, next) => {

  knex('moving_companies')
    .insert({ 
      logo: req.body.logo,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
      yelpRating: req.body.yelpRating, 
      yelpReviews: req.body.yelpReviews }, '*')
    .then(() => {
      knex('moving_companies')
      .orderBy('company_id')
      .then((companies) => {
      res.render('adminViews/admin_moving_companies', {companies});
    })
  })
    .catch((err) => {
      res.status(302).json({
        status: 'error',
        data: err
      });
    });
});

router.get('/admin_companies/:company_id', (req, res, next) => {
  knex('moving_companies')
  .where('company_id',req.params.company_id)
  .then((companies) => {
    if(!companies) {
      return next();
    }
    res.render('adminViews/update_companies', {companies});
})
  .catch((err) => {
    next(err);
  })
})

router.patch('/update_companies/:company_id', (req, res, next) => {
  knex('moving_companies')
    .where('company_id', req.params.company_id)
    .then(() => {
       knex('moving_companies')
        .update({ 
        logo: req.body.logo,
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        yelpRating: req.body.yelpRating, 
        yelpReviews: req.body.yelpReviews }, '*')
        .where('company_id', req.params.company_id)
        .then((companies) => {
          res.render('adminViews/admin_moving_companies', {companies});
        })
        .catch((err) => {
          next(err);
        });
    })
});

router.delete('/admin_companies/:company_id', function(req, res) {
  let row;
  knex('moving_companies')
    .where('company_id', req.params.company_id)
    .then((companies)=> {
      row = companies;
      return knex('moving_companies')
      .del()
      .where('company_id', req.params.company_id);
    })
    .then(() => {
      delete row.company_id;
      knex('moving_companies')
          .orderBy('company_id')
          .then((companies) => {
      res.render('adminViews/admin_moving_companies', {companies});
    })
  })
    
    .catch(function(err) {
      
      res.sendStatus(500);
    });
});


module.exports = router;

