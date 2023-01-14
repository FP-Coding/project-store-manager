const { Router } = require('express');
const { productsController } = require('../controllers');
const { nameValidate } = require('../middlewares');

const route = Router();

route.get('/', productsController.getAll);

route.get('/:id', productsController.getById);

route.post('/', nameValidate, productsController.create);

module.exports = route;
