const { getTokensForCard } = require('../getTokens/service');
const { GetTokenRequestDto } = require('../getTokens/dto');
const { getErrorMessage } = require('../../../error-handler/errorCodes');

function getTokensController(params) {
    if (!params.id || params.id.length !== 32) {
        getErrorMessage(-209); //"Wrong format!"
      }

    const dto = new GetTokenRequestDto(params.id);
    return getTokensForCard(dto.id);
}

module.exports = { getTokensController };