const { Book, BookCreateValidator, BookUpdateValidator } = require('./model');
const { BookService } = require('./service');
const { BookRoutes } = require('./routes');

module.exports = {
  Book,
  BookCreateValidator,
  BookUpdateValidator,
  BookService,
  BookRoutes,
};
