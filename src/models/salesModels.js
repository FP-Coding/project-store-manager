const snakeize = require('snakeize');
const connection = require('./connection');

const create = async (sales) => {
  const columns = Object.keys(snakeize(sales[0])).join(', ');
  const placeholders = Object.keys(sales).map((_) => '?').join(', ');
  const query = `INSERT INTO StoreManager.sales_products (${columns}) VALUES (${placeholders})`;
  const salesInserted = sales.map((sale) => {
    const [{ insertId }] = connection.execute(query, [...Object.values(sale)]);
    return insertId;
  });
  await Promise.all(salesInserted);
  return salesInserted;
};

const getByIds = async (ids) => {
  const placeholders = ids.map((_) => '?').join(', ');
  const query = `SELECT * FROM StorageManager.sales_products WHERE sale_id IN (${placeholders})`;
  const [result] = connection.execute(query, [...ids]);
  return result;
};

module.exports = {
  create,
  getByIds,
};
