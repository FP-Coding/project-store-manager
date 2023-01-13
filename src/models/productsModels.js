const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * from StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getById = async (productId) => {
  try {
    const query = 'SELECT * from StoreManager.products WHERE id = ?';
    const [[result]] = await connection.execute(query, [productId]);
    return result;
  } catch (error) {
    return undefined;
  }
};

module.exports = {
  getAll,
  getById,
};
