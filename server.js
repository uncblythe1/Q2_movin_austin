const express = require('express');
const app = express();
const knex = require('./db/knex');
const environment = process.env.NODE_ENV || 'development';
const ports = {development: 7000, test: 1000};
const defaultPort = ports[environment];
const PORT = process.env.PORT || defaultPort;
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// const yelp = new Yelp({ apiKey: process.env.YELP_API_KEY })


app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let truckRentals = require('./routes/truck_rentals');
app.use(truckRentals);


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/home', (req, res) => {
    res.render('home');
    
})


app.listen(PORT, function() {
    console.log("listening on port: ", PORT);
    });
    
    module.exports = app;