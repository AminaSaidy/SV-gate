const { getTokensForCard } = require('../getTokens/service');
const { GetTokenRequestDto } = require('../getTokens/dto');
const { getErrorMessage } = require('../../../error-handler/errorCodes');

function getTokensController(params) {
    if (!params.cardId || params.cardId.length !== 32) {
        getErrorMessage(-209); //"Wrong format!"
      }

    const dto = new GetTokenRequestDto(params.cardId);
    return getTokensForCard;
}

module.exports = { getTokensController };