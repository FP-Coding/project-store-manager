const mapError = {
  ID_NOT_FOUND: 400,
  PRODUCT_NOT_FOUND: 404,
  SALE_NOT_FOUND: 404,
  FAIL_TO_DELETE: 400,
  INVALID_VALUE: 400,
  INVALID_NAME: 422,
};

const errorMap = (type) => mapError[type];

module.exports = {
  errorMap,
};
