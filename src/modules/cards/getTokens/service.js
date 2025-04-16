const { GetTokensResponseDto } = require('../../cards/getTokens/dto');
const { mockPartners, cardPartnersMap } = require('../../../common/mockData');

const getTokensForCard = (cardId) => {
    const partnerIds = cardPartnersMap[cardId];
    if(!partnerIds) return [];

    return partnerIds
    .map((partnerId) => {
        const partner = mockPartners.find(p => p.id === partnerId && p.verified);
        if (partner) {
            return new GetTokensResponseDto(
                partner.id,
                partner.appName,
                partner.registrationDate
            );
        }
    })
    .filter(Boolean);
};

module.exports = { getTokensForCard };