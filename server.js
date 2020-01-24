const express = require('express');
const Projects = require('./projects/project-model');
const server = express();

server.use(express.json());

function booleanConverter(obj) {
  const completed = obj.completed === 0 ? false : true;
  return {
    ...obj,
    completed: completed
  }
}

server.get('/api/projects', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      const booleanProjects = projects.map(project => booleanConverter(project));
      res.status(200).json(booleanProjects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to get projects.'
      });
    });
});

server.get('/api/resources', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to get resources.'
      });
    });
});

server.get('/api/tasks', (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      const booleanTasks = tasks.map(task => booleanConverter(task));
      res.status(200).json(booleanTasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to get tasks.'
      });
    });
});

module.exports = server;