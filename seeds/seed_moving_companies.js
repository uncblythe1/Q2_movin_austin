exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('moving_companies').del()
      .then(function () {
  
        // Inserts seed entries
        return knex('moving_companies').insert([
          {
            "name": "Word of Mouth Moving",
            "logo": "https://pbs.twimg.com/profile_images/526047411777437697/84viOyG-_400x400.jpeg",
            "address": "111 Congress Ave, Ste 400, Austin, TX 78701",
            "phone": "(512) 443-9673",
            "website": "www.wordofmouthmoving.com",
            "yelpRating": 5.0,
            "yelpReviews": "`We've moved a number of times during the last few years and this was easily our smoothest and least stressful move. We highly, highly recommend Word of Mouth Moving. Thank you for making our day stress-free!! Worth every penny!`"
          },
          {
            "name": "Jackson's Moving and Delivery",
            "logo": "https://static.wixstatic.com/media/c2a034_a6d771eaf46245118e1d64a990b4911e.png/v1/fill/w_264,h_328,al_c,lg_1,q_80/c2a034_a6d771eaf46245118e1d64a990b4911e.webp",
            "address": "606 W 51st St., Austin, TX 78751",
            "phone": "(512) 945-0980",
            "website": "www.jacksonsmoving.com",
            "yelpRating": 5.0,
            "yelpReviews": "`Love these guys and can't say enough good things about them, I'll be using them for every move!`"
          },
          {
            "name": "Einstein Moving Company - North Austin",
            "logo": "https://s3-media2.fl.yelpcdn.com/bphoto/kgmcfwymx8mBVgBbM7eQrA/ls.jpg",
            "address": "9200 Brown Ln Ste A, Austin, TX 78754",
            "phone": "(512) 815-8781",
            "website": "www.einsteinmoving.com",
            "yelpRating": 5.0,
            "yelpReviews": "`Cons:-NOT A SINGLE ONE! HIRE THESE GUYS!`"
          },
          {
            "name": "Square Cow Movers",
            "logo": "https://www.filepicker.io/api/file/Qbetd2SMTTCuzNTIvPqN/convert?rotate=exif",
            "address": "9311 N Fm 620, Austin, TX 78726",
            "phone": "(512) 401-6683",
            "website": "www.squarecowmovers.com",
            "yelpRating": 4.0,
            "yelpReviews": "`As we crawled in bed after the longest move of my lifetime...we were immediately greeted by the bedroom floor as our entire bed fell apart!`"
          },
          {
            "name": "JACKson of All Trades",
            "logo": "https://jacksonmovesme.com/wp/wp-content/themes/jackson_of_all_trades/images/jackson_of_all_trades-logo.png",
            "address": null,
            "phone": "(512) 850-1843",
            "website": "www.jacksonmovesme.com",
            "yelpRating": 5.0,
            "yelpReviews": "` Moving is generally something that I dread but these guys made it simple, safe and fast. `"
          }
        ]);
      });
  }