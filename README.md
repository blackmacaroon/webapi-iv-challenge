# Web API IV Challenge

In this challenge, you will **deploy** an API of your choosing to `heroku`.

## Instructions

You are allowed, and **encouraged**, to collaborate with other peers. Please follow the twenty-minute rule, before seeking support from your PM and Instructor.

1. mkdir api
2. cd api
3. git init
4. npx gitignore node
5. npm init -y
6. create index.js
7. npm i express
8. const express = require('express');
9. const server = express();
10.  server.listen()
11. node index.js
12. npm i nodemon -D
13. write nodemon dev script in package.json (dev = foobar/banana) "nodemon server.js" to _force_
14. npm run dev (index.js default/check for "main" after)
15. server.use(express.json()); **Parsing JSON**
16. write custom middleware (configureMiddleware)
17. pass in server
18. abstract middleware and export(server.use(express.json()))/import (require) additional packages as required

## Minimum Viable Product

Pick any API, could be one of your past projects, and deploy it to `heroku`. Once deployed, send the URL to the PM for your group.

## Stretch Goal

- add support for environment variables using `.env` files. You can use the [dotenv](https://www.npmjs.com/package/dotenv) npm module.
