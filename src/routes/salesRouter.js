const { Router } = require('express');
const { salesProductsControllers, salesController } = require('../controllers');
const { salesProductsValidate } = require('../middlewares');

const route = Router();

route.get('/:id', salesProductsControllers.getById);

route.delete('/:id', salesController.deleteSale);

route.get('/', salesProductsControllers.innerGetAll);

route.post('/', salesProductsValidate.salesProductsValidateProductId,
  salesProductsValidate.salesProductsValidateQuantity,
  salesProductsControllers.create);

module.exports = route;
