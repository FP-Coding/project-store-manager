const { productsService } = require('../services');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();
  return res.status(200).json(result.message);
};

module.exports = {
  getAll,
};
