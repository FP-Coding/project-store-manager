const salesProductsValidateProductId = (req, res, next) => {
  const arraySales = req.body;

  const verificationProductId = arraySales.every(({ productId }) => (!productId));
  if (verificationProductId) return res.status(400).json({ message: '"productId" is required' });

  next();
};

const salesProductsValidateQuantity = (req, res, next) => {
  const arraySales = req.body;

  const verificationQuantityIsGreaterThenZero = arraySales
    .every(({ quantity }) => quantity < 1 || quantity === 0);
  if (verificationQuantityIsGreaterThenZero) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  const existQuantity = arraySales.every(({ quantity }) => !quantity);
  if (existQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = {
  salesProductsValidateProductId,
  salesProductsValidateQuantity,
};
