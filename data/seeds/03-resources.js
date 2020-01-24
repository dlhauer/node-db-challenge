
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'van'},
        {id: 2, resource_name: 'copy machine'},
        {id: 3, resource_name: 'stapler'}
      ]);
    });
};
