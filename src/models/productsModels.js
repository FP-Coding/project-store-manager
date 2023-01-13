const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * from StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getById = async (productId) => {
  const query = 'SELECT * from StoreManager.products WHERE id = ?';
  const [[result]] = await connection.execute(query, [productId]);
  return result;
};

module.exports = {
  getAll,
  getById,
};
