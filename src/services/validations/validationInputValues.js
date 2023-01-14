const { idSchema, nameProductSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  return { type: null, message: '' };
};

const validateNameProduct = (name) => {
  const { error } = nameProductSchema.validate(name);
  if (error) {
    return {
      type: 'INVALID_VALUE', message: '"name" length must be at least 5 characters long',
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNameProduct,
};
