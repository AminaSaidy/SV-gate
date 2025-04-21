const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { blockTokens } = require("./service");

const removeTokensController = (params) => {
  const tokens = params.tokens;

  if (!Array.isArray(tokens) || tokens.length === 0 || tokens.length > 32) {
    throw getErrorMessage(-377); //Only tokens can be sent in this field!
  }

  return removeTokens(tokens);
};

module.exports = { removeTokensController };
