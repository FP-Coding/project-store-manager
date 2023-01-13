const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getById = async (productId) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [[result]] = await connection.execute(query, [productId]);
    return result;
};

module.exports = {
  getAll,
  getById,
};
