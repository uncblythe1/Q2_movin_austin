
exports.up = function(knex, Promise) {
    return knex.schema.createTable('moving_companies', (table) => {
        table.increments('company_id').primary();
        table.string('logo');
        table.string('name');
        table.string('address');
        table.string('phone');
        table.string('website');
        table.string('yelpRating');
        table.text('yelpReviews');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('moving_companies');
};
