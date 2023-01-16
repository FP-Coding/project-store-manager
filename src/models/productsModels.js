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

const getByIds = async (ids) => {
  const placeholders = ids.map((_) => '?').join(', ');
  const query = `SELECT * FROM StoreManager.products WHERE id IN (${placeholders})`;
  const [result] = await connection.execute(query, ids);
  return result;
};

const create = async (newProductName) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [newProductName]);
  return insertId;
};

const update = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const [{ changedRows }] = await connection.execute(query, [name, id]);
  return changedRows;
};

module.exports = {
  getAll,
  getById,
  getByIds,
  create,
  update,
};
