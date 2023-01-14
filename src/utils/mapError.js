const mapError = {
  ID_NOT_FOUND: 400,
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 400,
};

const errorMap = (type) => mapError[type];

module.exports = {
  errorMap,
};
