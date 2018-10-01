const express = require('express');
const router = express.Router();


router.get('/supplies', (req, res, next) => {
        res.render('supplies');
});

module.exports = router;