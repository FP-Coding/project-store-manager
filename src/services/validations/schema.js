const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameProductSchema = Joi.string().min(5).max(30).required();

const saleSchema = Joi.object({
  productId: idSchema,
  quantity: Joi.number().integer().min(1).required(),
});

const salesSchema = Joi.array().items(saleSchema);

module.exports = {
  idSchema,
  nameProductSchema,
  salesSchema,
};
