const express = require('express');
const router = express.Router();


router.get('/supplies', (req, res, next) => {
        res.render('userViews/supplies');
});

module.exports = router;