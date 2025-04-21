const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { blockTokens } = require("./service");

const blockTokensController = (params) => {
  const tokens = params.tokens;

  if (!Array.isArray(tokens) || tokens.length === 0) {
    throw getErrorMessage(-377); //Only tokens can be sent in this field!
  }

  return blockTokens(tokens);
};

module.exports = { blockTokensController };
