const { Response } = require('../../libs');
const { BookService } = require('./service');

const create = async (req, res) =>
  Response.send(res, await BookService.create(req.body));

const updateById = async (req, res) =>
  Response.send(res, await BookService.updateById(req.params.id, req.body));

const deleteById = async (req, res) =>
  Response.send(res, await BookService.deleteById(req.params.id));

const findAll = async (req, res) =>
  Response.send(res, await BookService.findAll());

const findById = async (req, res) =>
  Response.send(res, await BookService.findById(req.params.id));

module.exports = {
  BookController: {
    create,
    updateById,
    deleteById,
    findAll,
    findById,
  },
};
