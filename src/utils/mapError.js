const mapError = {
  ID_NOT_FOUND: 400,
};

const errorMap = (type) => mapError[type];

module.exports = {
  errorMap,
};
