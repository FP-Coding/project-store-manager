const snakeize = require('snakeize');

const getPlaceholdersAndColumns = (object) => {
  const columns = Object.keys(snakeize(object)).join(', ');

  const placeholders = Object.keys(object).map((_) => '?').join(', ');

  return { columns, placeholders };
};

module.exports = {
  getPlaceholdersAndColumns,
};
