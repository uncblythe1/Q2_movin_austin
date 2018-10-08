const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const knex = require('./db/knex');
const environment = process.env.NODE_ENV || 'development';
const ports = {development: 7000, test: 1000};
const defaultPort = ports[environment];
const PORT = process.env.PORT || defaultPort;
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let truckRentals = require('./routes/truck_rentals');
let movingCompanies = require('./routes/moving_companies');
let supplies = require('./routes/supplies');
let users = require('./routes/users');
let yelp = require('./routes/yelp');

app.use(users);
app.use(truckRentals);
app.use(movingCompanies);
app.use(supplies);
app.use(yelp);


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/admin', (req, res) => {
    res.render('adminViews/admin')
})




app.listen(PORT, function() {
    console.log("listening on port: ", PORT);
    });
    
    module.exports = app;