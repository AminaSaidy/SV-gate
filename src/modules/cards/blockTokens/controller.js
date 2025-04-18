const { getErrorMessage } = require("../../../error-handler/errorCodes");

const blockTokensController = (req, res) => {
    const tokens = req.body.params.tokens;

    if(!Array.isArray(tokens) || tokens.length === 0) {
        throw getErrorMessage(-377); //Only tokens can be sent in this field!
    }

    return blockTokens(tokens);
}

module.exports = { blockTokensController };