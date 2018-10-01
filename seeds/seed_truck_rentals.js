exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('truck_rentals').del()
      .then(function () {
  
        // Inserts seed entries
        return knex('truck_rentals').insert([
          {
            "name": "U-Haul Moving & Storage at Ben White",
            "logo": "https://goo.gl/LCquZj",
            "address": "304 E Ben White Blvd, Austin, TX 78704",
            "phone": "(512) 447-9875",
            "website": "www.uhaul.com",
            "yelpRating": 1.5,
            "yelpReviews": "`This place stays open because I'm sure we all think they are the only gig in town. The customer service is garbage and they are nearly impossible to get on the phone.`"
          },
          {
            "name": " A Plus Texas Movers",
            "logo": "https://goo.gl/LCquZj",
            "address": "5214 Rogers Ln, Austin, TX 78724",
            "phone": "(512) 865-7956",
            "website": "www.movingaustintexas.com",
            "yelpRating": 5.0,
            "yelpReviews": "`I hope I don't have to move again for a long time, but I would certainly hire Rich and A Plus Texas Movers again.`"
          },
          {
            "name": "Penske Truck Rental",
            "logo": "https://goo.gl/LCquZj",
            "address": "12633 Research Blvd, Austin, TX 78759",
            "phone": "(512) 335-7639",
            "website": "www.pensketruckrental.com",
            "yelpRating": 5.0,
            "yelpReviews": "`These guys are beyond exceptional. They bent over backwards to help me with my tow dolly /  car hauler situation because I had a rear wheel drive vehicle in tow and didn't realize I wasn't supposed to tow it on a dolly without disconnecting the drive axle. `"
          },
          {
            "name": "Capps Van & Car Rental",
            "logo": "https://goo.gl/LCquZj",
            "address": "4300 Airport Blvd, Austin, TX 78722",
            "phone": "(512) 323-0003",
            "website": "www.cappsvanrental.com",
            "yelpRating": 5.0,
            "yelpReviews": "`Nice folks, easy to work with, reasonably priced.`"
          },
          {
            "name": "Life Storage",
            "logo": "https://goo.gl/LCquZj",
            "address": "9706 Manchaca Rd, Austin, TX 78748",
            "phone": "(866) 838-2192",
            "website": "www.lifestorage.com",
            "yelpRating": 5.0,
            "yelpReviews": "` It is always very well lit and clean and maintained to make it feel safe. Highly recommend them! Thank you!`"
          }
        ]);
      });
  }