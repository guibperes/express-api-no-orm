const { BaseRoutes } = require('../../base');
const { BookCreateValidator, BookUpdateValidator } = require('./model');
const { BookController } = require('./controller');

const BookRoutes = BaseRoutes.build(
  BookController,
  BookCreateValidator,
  BookUpdateValidator
);

module.exports = { BookRoutes };
