const { Router } = require('express');
const { productsController } = require('../controllers');
const { nameValidate } = require('../middlewares');

const route = Router();

route.get('/:id', productsController.getById);

route.put('/:id', nameValidate, productsController.update);

route.delete('/:id', productsController.deleteProduct);

route.get('/', productsController.getAll);

route.post('/', nameValidate, productsController.create);

module.exports = route;
