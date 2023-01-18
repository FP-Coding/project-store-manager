const camelize = require('camelize');
const { salesModels, salesProductsModels, productModels } = require('../models');
const { validateId, validateArraySales } = require('./validations/validationInputValues');

const create = async (sales) => {
  const error = validateArraySales(sales);
  if (error.type) return error;
  const productsIds = sales.map(({ productId }) => productId);
  const productsFounded = await productModels.getByIds(productsIds);
  const idsProductsFounded = productsFounded
  .map(({ id }) => Number(id));

  if (idsProductsFounded.length !== productsIds.length) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const id = await salesProductsModels.create(sales);
  const products = await salesProductsModels.getById(id);

  const productsFormated = {
    id: products[0].sale_id,
    itemsSold: sales,
  };

  return { type: null, message: productsFormated };
};

const getById = async (id) => {
  const error = validateId(id);
  if (error.type) return error;
  const saleInfo = await salesModels.getById(id);
  if (!saleInfo) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  const productsSales = await salesProductsModels.getById(id);
  const sales = camelize(productsSales).map(({ productId, quantity }) => ({
    date: saleInfo.date,
    productId,
    quantity,
  }));
  return { type: null, message: sales };
};

const innerGetAll = async () => {
  const sales = await salesProductsModels.innerGetAll();
  return { type: null, message: sales };
};

const update = async ({ id, sales }) => {
  const errorId = validateId(id);
  if (errorId.type) return errorId;
  const errorSales = validateArraySales(sales);
  if (errorSales.type) return errorSales;
  const existSale = await salesModels.getById(id);
  if (!existSale) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  const productsIds = sales.map(({ productId }) => productId);
  const productsFounded = await productModels.getByIds(productsIds);
  const idsProductsFounded = productsFounded
  .map(({ id: idFounded }) => Number(idFounded));
  if (idsProductsFounded.length !== productsIds.length) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }
  await salesProductsModels.update({ id, sales });
  return { type: null, message: { saleId: id, itemsUpdated: sales } };
};

module.exports = {
  create,
  getById,
  innerGetAll,
  update,
};
