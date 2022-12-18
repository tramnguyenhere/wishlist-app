const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const wishlistRouter = require('./controllers/wishlist.js');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(middleware.requestLogger);

app.use('/api/wishlist', wishlistRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
