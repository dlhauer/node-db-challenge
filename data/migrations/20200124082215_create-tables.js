
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 120).notNullable();
      tbl.string('description', 480);
      tbl.boolean('completed').notNullable().defaultTo(true);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_description', 240).notNullable();
      tbl.string('task_notes', 480);
      tbl.boolean('completed').notNullable().defaultTo(true);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 120).unique().notNullable();
      tbl.string('resource_description', 240);
    })
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
};

exports.down = function(knex) {
  return knex.schema
          .dropTableIfExists('project_resources')
          .dropTableIfExists('resources')
          .dropTableIfExists('tasks')
          .dropTableIfExists('projects');
};
