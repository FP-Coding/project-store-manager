const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameProductSchema = Joi.string().min(5).max(30).required();

const saleSchema = Joi.object({
  productId: idSchema.label('productId'),
  quantity: Joi.number().integer().min(1).required()
.label('quantity'),
});

const salesSchema = Joi.array().items(saleSchema);

module.exports = {
  idSchema,
  nameProductSchema,
  salesSchema,
};
