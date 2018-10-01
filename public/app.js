
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = process.env.NODE_ENV['YELP_API_KEY'];

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});

// let RapidAPI = require('rapidapi-connect');
// var rapid = new RapidAPI("default-application_5bb0f8c5e4b09cbc25b08399", process.env.NODE_ENV['YELP_API_KEY']);

// rapid.call('YelpAPI', 'getSingleBusiness', { 


// }).on('success', function (payload) {
// 	 /*YOUR CODE GOES HERE*/ 
// }).on('error', function (payload) {
// 	 /*YOUR CODE GOES HERE*/ 
// });

// rapid.call('YelpAPI', 'getSingleBusiness', { 


// }).on('success', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// }).on('error', (payload)=>{
// 	 /*YOUR CODE GOES HERE*/ 
// });