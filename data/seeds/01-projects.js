
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'create an amazing app'},
        {id: 2, project_name: 'raise children to be millionaires, generous millionaires'},
      ]);
    });
};
