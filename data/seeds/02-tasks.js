
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'learn all the programming languages', project_id: 1},
        {id: 2, task_description: 'give kids good education', project_id: 2},
        {id: 3, task_description: 'buy an amazing computer, desk, and chair', project_id: 1}
      ]);
    });
};
