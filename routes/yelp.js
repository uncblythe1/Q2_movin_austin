const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');
const fetch = require("isomorphic-fetch") 

let apiHost = "https://api.yelp.com/v3";
let id = "just-in-time-moving-and-delivery-phoenix-4";
let businessDetails = `/businesses/${id}`;
  


router.get('/business', (req, res, next) => {
  fetch(`${apiHost}${businessDetails}${id}`, {
    method: 'GET',
    headers: {
      'authorization': 'Bearer ' + '4C6OZgS9woPwCTNBRZVdbSf_cvCqtoU4t32h1zTX-sf2i2ii1Va-laz0Kua-L--qBH-CV3Ejzp14w8cCbMj8PmfRkeMI-Mj_A4xzR9idQfXQthub33wflzuR1ruwW3Yx'
    }
  })
.then(response => response.json())
console.log(response)

.then( (data) => {
  res.send(data);
})
})


module.exports = router;

