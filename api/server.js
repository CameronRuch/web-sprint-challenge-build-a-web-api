const express = require('express');
const server = express();

const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Servers Working!');
})

server.use('*', (req, res) => {
    // catch all 404 errors middleware
    res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
  });
  

module.exports = server;
