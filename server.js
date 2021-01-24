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

server.get('/api/projects/resources', (req, res) => {
  Projects.getProjectResources()
    .then(projectResources => {
      res.status(200).json(projectResources);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to get project resources'
      });
    });
});

server.post('/api/resources', (req, res) => {
  Projects.addResource(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to save new resource.'
      });
    });
});

server.post('/api/projects', (req, res) => {
  Projects.addProject(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to save new project.'
      });
    });
});

server.post('/api/tasks', (req, res) => {
  Projects.addTask(req.body)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Failed to save new task.'
      });
    });
});
module.exports = server;