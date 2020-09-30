const express = require('express');
const cors = require('cors');

/** Express app */
const app = express();

/** Handlers */
const errorHandler = require('./middlewares/error-handler');
const notFoundHandler = require('./middlewares/not-found');

/** Controllers */
const InfoController = require('./controllers/info-controller');
const TextsController = require('./controllers/texts-controller');

app.use(express.json());
app.use(cors());
app.use(new InfoController(express.Router()).router);
app.use(new TextsController(express.Router()).router);
app.use(notFoundHandler());
app.use(errorHandler());

module.exports = app;
