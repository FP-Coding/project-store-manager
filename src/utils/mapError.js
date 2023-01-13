const mapError = {
  ID_NOT_FOUND: 400,
  PRODUCT_NOT_FOUND: 404,
};

const errorMap = (type) => mapError[type];

module.exports = {
  errorMap,
};
