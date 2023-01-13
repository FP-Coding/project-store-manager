const { productsService } = require('../services');
const { errorMap } = require('../utils/mapError');

const getAll = async (_req, res) => {
  const { type, message } = await productsService.getAll();
  if (type) return res.status(400).json({ message });
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
};
