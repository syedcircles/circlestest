const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser')
// const logger = require('morgan')
// const mongoose = require('mongoose');
// const app = express();
// app.use(logger('dev'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use('/api',require('./route/customerRoute'));
// mongoose.connect('mongodb://localhost/telcoQuiz', (err, connect) => {
//     if (err) {
//         console.log('Db not connected !!')
//     } else {
//         console.log('Db connected');
//     }
// })

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});