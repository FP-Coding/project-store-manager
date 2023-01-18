const { productModels } = require('../models');
const { validateId, validateNameProduct } = require('./validations/validationInputValues');

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

const create = async (name) => {
  const error = validateNameProduct(name);
  if (error.type) return error;
  const id = await productModels.create(name);
  return { type: null, message: { id, name } };
};

const update = async (id, name) => {
  const errorId = validateId(id);
  if (errorId.type) return errorId;
  const isAValidId = await productModels.getById(id);
  if (!isAValidId) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const errorName = validateNameProduct(name);
  if (errorName.type) return errorName;
  const updatedProduct = await productModels.update(id, name);
  if (updatedProduct !== 1) {
    return { type: 'FAIL_UPDATE', message: 'Unable to update with this data' };
  }
  return { type: null, message: { id, name } };
};

const deleteProduct = async (id) => {
  const error = validateId(id);
  if (error.type) return error;
  const product = await productModels.getById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  await productModels.deleteProduct(id);
  return { type: null, message: '' };
};

const search = async (searchTerm) => {
  const products = await productModels.search(searchTerm);
  return { type: null, message: products };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
  search,
};
