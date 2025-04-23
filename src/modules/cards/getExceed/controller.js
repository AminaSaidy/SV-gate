const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { getExceed } = require("./service");

const getExceedController = (params) => {
  const { ids } = params;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw getErrorMessage(-377); // Only tokens can be sent in this field!
  }

  return getExceed(ids);
};

module.exports = { getExceedController };
