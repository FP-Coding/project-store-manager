const { salesServices } = require('../services');
const { errorMap } = require('../utils/mapError');

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.deleteSale(id);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(204).end();
};

module.exports = {
  deleteSale,
};
