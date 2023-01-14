const { productModels } = require('../models');
const { validateId } = require('./validations/validationInputValues');

const getAll = async () => {
  const result = await productModels.getAll();
  return { type: null, message: result };
};

const getById = async (id) => {
  const error = validateId(id);
  if (error.type) return error;
  const result = await productModels.getById(id);
  if (!result) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: result };
};

const create = async () => {};

module.exports = {
  getAll,
  getById,
  create,
};
