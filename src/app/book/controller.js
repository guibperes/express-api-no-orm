const { BaseController } = require('../../base');
const { BookService } = require('./service');

const BookController = BaseController.build(BookService);

module.exports = { BookController };
