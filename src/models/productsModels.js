const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * from StoreManager.products',
  );
  return result;
};

module.exports = {
  getAll,
};
