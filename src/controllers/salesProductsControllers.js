const { salesProductsServices } = require('../services');
const { errorMap } = require('../utils/mapError');

const create = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesProductsServices.create(sales);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  create,
};
