const db = require('../data/db-config');

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks
}

function addResource(resourceData) {
  return db('resources')
          .insert(resourceData)
          .then(([id]) => {
            return id;
          })
}

function getResources() {
  return db.select('*').from('resources');
}

function addProject(projectData) {
  return db('projects')
  .insert(projectData)
  .then(([id]) => {
    return id;
  })
}

function getProjects() {
  return db.select('*').from('projects');
}

function addTask(taskData) {
  return db('tasks')
  .insert(taskData)
  .then(([id]) => {
    return id;
  })
}

function getTasks() {
  return db('tasks as t')
          .join('projects as p', 'p.id', 't.project_id')
          .select(
            'p.project_name', 
            'p.description as project_description', 
            't.task_description',
            't.task_notes',
            't.completed' 
          )
          .orderBy('p.id');
}