const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { removeToken } = require("./service");

const removeTokenController = (params) => {
  const tokens = params.tokens;

  if (!Array.isArray(tokens) || tokens.length === 0 || tokens.length > 32) {
    throw getErrorMessage(-377); //Only tokens can be sent in this field!
  }

  return removeToken(tokens);
};

module.exports = { removeTokenController };
