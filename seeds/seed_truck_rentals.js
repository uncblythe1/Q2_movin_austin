exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('truck_rentals').del()
      .then(function () {
  
        // Inserts seed entries
        return knex('truck_rentals').insert([
          {
            "name": "U-Haul Moving & Storage at Ben White",
            "logo": "https://charleston.com/media/com_jbusinessdirectory/pictures/companies/0/uhaul01-1483480915.jpg",
            "address": "304 E Ben White Blvd, Austin, TX 78704",
            "phone": "(512) 447-9875",
            "website": "www.uhaul.com",
            "yelpRating": 1.5,
            "yelpReviews": "`This place stays open because I'm sure we all think they are the only gig in town. The customer service is garbage and they are nearly impossible to get on the phone.`"
          },
          {
            "name": " A Plus Texas Movers",
            "logo": "https://www.valueautorental.com/wp-content/images/truck.png",
            "address": "5214 Rogers Ln, Austin, TX 78724",
            "phone": "(512) 865-7956",
            "website": "www.movingaustintexas.com",
            "yelpRating": 5.0,
            "yelpReviews": "`I hope I don't have to move again for a long time, but I would certainly hire Rich and A Plus Texas Movers again.`"
          },
          {
            "name": "Penske Truck Rental",
            "logo": "https://www.pensketruckrental.com/imgs/trucks-large/img_rental_16economyvan.jpg",
            "address": "12633 Research Blvd, Austin, TX 78759",
            "phone": "(512) 335-7639",
            "website": "www.pensketruckrental.com",
            "yelpRating": 5.0,
            "yelpReviews": "`These guys are beyond exceptional. They bent over backwards to help me with my tow dolly /  car hauler situation because I had a rear wheel drive vehicle in tow and didn't realize I wasn't supposed to tow it on a dolly without disconnecting the drive axle. `"
          },
          {
            "name": "Capps Van & Car Rental",
            "logo": "http://www.cappsvanrental.com/assets/images/locationImages/HSP.jpg",
            "address": "4300 Airport Blvd, Austin, TX 78722",
            "phone": "(512) 323-0003",
            "website": "www.cappsvanrental.com",
            "yelpRating": 5.0,
            "yelpReviews": "`Nice folks, easy to work with, reasonably priced.`"
          },
          {
            "name": "Life Storage",
            "logo": "https://www.lifestorage.com/assets/img/storephotos/life-storage-369-4-moving-truck-04122018-med.jpg",
            "address": "9706 Manchaca Rd, Austin, TX 78748",
            "phone": "(866) 838-2192",
            "website": "www.lifestorage.com",
            "yelpRating": 5.0,
            "yelpReviews": "` It is always very well lit and clean and maintained to make it feel safe. Highly recommend them! Thank you!`"
          }
        ]);
      });
  }