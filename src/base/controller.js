const { Response } = require('../libs');

const build = Service => {
  const create = async (req, res) =>
    Response.send(res, await Service.create(req.body));

  const updateById = async (req, res) =>
    Response.send(res, await Service.updateById(req.params.id, req.body));

  const deleteById = async (req, res) =>
    Response.send(res, await Service.deleteById(req.params.id));

  const findAll = async (req, res) =>
    Response.send(res, await Service.findAll());

  const findById = async (req, res) =>
    Response.send(res, await Service.findById(req.params.id));

  return { create, findById, updateById, deleteById, findAll };
};

module.exports = {
  BaseController: {
    build,
  },
};
