const { Router } = require('express');
const { salesController } = require('../controllers');
const { salesProductsValidate } = require('../middlewares');

const route = Router();

route.post('/', salesProductsValidate.salesProductsValidateProductId,
  salesProductsValidate.salesProductsValidateQuantity,
  salesController.create);

module.exports = route;
