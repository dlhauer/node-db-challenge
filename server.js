const express = require('express');
const Projects = require('./projects/project-model');
const server = express();

server.use(express.json());

server.get('/api/projects', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
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
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to get tasks.'
      });
    });
});

module.exports = server;