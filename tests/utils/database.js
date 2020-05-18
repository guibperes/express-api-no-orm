const { Database } = require('../../src/database');

const truncate = () =>
  Promise.all(
    Object.keys(Database.models).map(model =>
      Database.models[model].destroy({ truncate: true, force: true })
    )
  );

module.exports = {
  DatabaseUtils: {
    truncate,
  },
};
