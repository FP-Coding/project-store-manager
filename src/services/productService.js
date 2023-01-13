const { productModels } = require('../models');
const { validateId } = require('./validations/validationInputValues');

const getAll = () => {
  const result = productModels.getAll();
  return { type: null, message: result };
};

module.exports = {
  getAll,
};
