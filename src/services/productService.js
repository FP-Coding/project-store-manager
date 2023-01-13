const { productModels } = require('../models');
const { validateId } = require('./validations/validationInputValues');

const getAll = async () => {
  const result = await productModels.getAll();
  return { type: null, message: result };
};

const getById = async (id) => {
  const error = validateId(id);
  if (error.type) return error;
  const result = await productModels.getById();
  if (!result) return { type: 'ID_NOT_FOUND', message: '"id" not found' };
  return { type: null, message: result };
};

module.exports = {
  getAll,
  getById,
};