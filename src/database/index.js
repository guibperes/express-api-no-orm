const Sequelize = require('sequelize');

const config = require('./config');
const { Book } = require('../app/book');

const models = [Book];

const init = () => {
  const connection = new Sequelize(config);

  models
    .map(model => model.init(connection))
    .map(model => model.associate && model.associate(connection.models));
};

module.exports = {
  Database: {
    models,
    init,
  },
};
