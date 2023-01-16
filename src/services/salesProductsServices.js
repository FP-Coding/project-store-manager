const { salesProductsModels, productModels } = require('../models');

const create = async (sales) => {
  const productsIds = sales.map(({ productId }) => productId);

  const productsFounded = await productModels.getByIds(productsIds);

  const idsProductsFounded = productsFounded
  .map(({ id }) => Number(id));

  const isSalesInProductsFounded = sales
    .every(({ productId }) => idsProductsFounded.includes(productId));

  if (!isSalesInProductsFounded) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const id = await salesProductsModels.create(sales);
  const products = await salesProductsModels.getById(id);

  const productsFormated = {
    id: products[0].sale_id,
    itemsSold: sales,
  };

  return { type: null, message: productsFormated };
};

module.exports = {
  create,
};
