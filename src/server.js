const express = require('express');
require('express-async-errors');
const cors = require('cors');

const { Database } = require('./database');
const { loggerMiddleware, logger } = require('./libs');
const { notFound, errorMiddleware } = require('./middlewares');
const { routes } = require('./routes');

const server = express();

server.use(express.json());
server.use(cors());
server.use(loggerMiddleware);
server.use(routes);
server.use('*', notFound);
server.use(errorMiddleware);

const start = async () => {
  try {
    Database.init();
    server.listen(5000, () => logger.info('Server is running on port 5000'));
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

module.exports = {
  App: {
    server,
    start,
  },
};
