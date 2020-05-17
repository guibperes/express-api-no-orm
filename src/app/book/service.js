const { Response, HttpStatus } = require('../../libs');
const { Book } = require('./model');

const create = async ({ name, description, pages }) =>
  Response.build(await Book.create({ name, description, pages }));

const findById = async id => {
  const book = await Book.findByPk(id);

  if (!book) {
    return Response.buildError(
      'Cannot find book with provided id',
      HttpStatus.NOT_FOUND
    );
  }

  return Response.build(book);
};

const updateById = async (id, bookData) => {
  const book = await Book.findByPk(id);

  if (!book) {
    return Response.buildError(
      'Cannot find book with provided id',
      HttpStatus.NOT_FOUND
    );
  }

  const updatedBook = await book.update(bookData);

  return Response.build(updatedBook);
};

const deleteById = async id => {
  const book = await Book.findByPk(id);

  if (!book) {
    return Response.buildError(
      'Cannot find book with provided id',
      HttpStatus.NOT_FOUND
    );
  }

  await book.destroy();
  return Response.build({ deleted: true });
};

const findAll = async () => Response.build(await Book.findAll());

module.exports = {
  BookService: {
    create,
    findById,
    updateById,
    deleteById,
    findAll,
  },
};
