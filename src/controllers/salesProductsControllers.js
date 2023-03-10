const { salesProductsServices } = require('../services');
const { errorMap } = require('../utils/mapError');

const create = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesProductsServices.create(sales);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(201).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesProductsServices.getById(id);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};

const innerGetAll = async (_req, res) => {
  const { message } = await salesProductsServices.innerGetAll();
  return res.status(200).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;

  const { type, message } = await salesProductsServices.update({ id, sales });
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  create,
  getById,
  innerGetAll,
  update,
};
