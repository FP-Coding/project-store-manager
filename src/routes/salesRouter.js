const { Router } = require('express');
const { salesProductsControllers } = require('../controllers');
const { salesProductsValidate } = require('../middlewares');

const route = Router();

route.post('/', salesProductsValidate.salesProductsValidateProductId,
  salesProductsValidate.salesProductsValidateQuantity,
  salesProductsControllers.create);

module.exports = route;
