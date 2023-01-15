const { salesServices } = require('../services');
// const { errorMap } = require('../utils/mapError');

const create = async (req, res) => {
  const sales = req.body;
  const { message } = await salesServices.create(sales);
  return res.status(200).json(message);
};

module.exports = {
  create,
};
