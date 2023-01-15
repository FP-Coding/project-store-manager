const { salesModels, productModels } = require('../models');

const create = async (sales) => {
  const ids = await salesModels(sales);
  const products = await salesModels.getByIds(ids);
  return products;
};

module.exports = {
  create,
};
