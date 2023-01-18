const { validateId } = require('./validations/validationInputValues');
const { salesModels } = require('../models');

const deleteSale = async (id) => {
  const error = validateId(id);
  if (error.type) return error;
  const existInDb = await salesModels.getById(id);
  if (!existInDb) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  await salesModels.deleteSale(id);
  return { type: null, message: '' };
};

module.exports = {
  deleteSale,
};
