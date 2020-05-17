const Sequelize = require('sequelize');

const config = require('./config');

const models = [];

const init = () => {
  const connection = new Sequelize(config);

  models
    .map(model => model.init(connection))
    .map(model => model.associate && model.associate(connection.models));
};

module.exports = {
  Database: {
    init,
  },
};
