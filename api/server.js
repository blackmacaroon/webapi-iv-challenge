const express = require('express');

const server = express();

server.use(express.json());


server.get('/', async (req, res) => {
      console.log(req)
})

module.exports = server;