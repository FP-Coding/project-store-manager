const connection = require('./connection');

const create = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  return insertId;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id = ?';
  const [[result]] = await connection.execute(query, [id]);
  return result;
};

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.sales';
  const [result] = await connection.execute(query);
  return result;
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';
  const [{ affectedRows }] = await connection.execute(query, [id]);
  return affectedRows;
};

module.exports = {
  create,
  getById,
  getAll,
  deleteSale,
};
