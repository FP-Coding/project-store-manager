const snakeize = require('snakeize');
const camelize = require('camelize');
const connection = require('./connection');
const salesModels = require('./salesModels');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.sales_products';
  const [result] = await connection.execute(query);
  return result;
};

const create = async (sales) => {
  const columns = Object.keys(snakeize(sales[0])).join(', ');

  const placeholders = Object.keys(sales[0]).map((_) => '?').join(', ');

  const newSaleID = await salesModels.create();

  const query = `INSERT INTO
  StoreManager.sales_products
  (sale_id, ${columns}) VALUES (${newSaleID}, ${placeholders})`;

  const salesInserted = sales.map(async (sale) => {
    const [{ insertId }] = await connection.execute(query, [...Object.values(sale)]);
    return insertId;
  });
  await Promise.all(salesInserted);
  return newSaleID;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const innerGetAll = async () => {
  const query = `
  SELECT s.id as sale_id, s.date, sp.product_id, sp.quantity
  FROM StoreManager.sales_products AS sp
    INNER JOIN
  StoreManager.sales AS s
    ON s.id = sp.sale_id`;
  const [result] = await connection.execute(query);
  return camelize(result);
};

module.exports = {
  create,
  getById,
  getAll,
  innerGetAll,
};
