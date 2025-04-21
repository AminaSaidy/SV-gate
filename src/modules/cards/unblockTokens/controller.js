const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { unblockTokens } = require("./service");

const unblockTokensController = (params) => {
  const tokens = params.tokens;

  if (!Array.isArray(tokens) || tokens.length === 0) {
    throw getErrorMessage(-377); // Only tokens can be sent in this field!
  }

  return unblockTokens(tokens);
};

module.exports = { unblockTokensController };
