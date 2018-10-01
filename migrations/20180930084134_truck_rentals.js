
exports.up = function(knex, Promise) {
    return knex.schema.createTable('truck_rentals', (table) => {
        table.increments('rental_id').primary();
        table.string('logo');
        table.string('name');
        table.string('address');
        table.string('phone');
        table.string('website');
        table.float('yelpRating');
        table.text('yelpReviews');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('truck_rentals');
};
