const { Router } = require('express');
const { productsController } = require('../controllers');

const route = Router();

route.get('/', productsController.getAll);

module.exports = route;
