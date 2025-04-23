const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { getCards } = require("./service");

const getController = (params) => {
  const { ids } = params;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw getErrorMessage(-377); // Only tokens can be sent in this field!
  }

  return getCards(ids);
};

module.exports = { getController };
