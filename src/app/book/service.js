const { BaseService } = require('../../base');
const { Book } = require('./model');

const BookService = BaseService.build('Book', Book);

module.exports = { BookService };
