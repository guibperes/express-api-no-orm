const { Router } = require('express');

const { Validations } = require('../middlewares');

const build = (Controller, EntityCreateValidator, EntityUpdateValidator) => {
  const routes = Router();

  routes.post(
    '/',
    Validations.validateBody(EntityCreateValidator),
    Controller.create
  );

  routes.get('/', Controller.findAll);

  routes.get('/:id', Validations.validateId, Controller.findById);

  routes.delete('/:id', Validations.validateId, Controller.deleteById);

  routes.put(
    '/:id',
    Validations.validateId,
    Validations.validateBody(EntityUpdateValidator),
    Controller.updateById
  );

  return routes;
};

module.exports = {
  BaseRoutes: {
    build,
  },
};
