const mockPartners = require('../../../common/mockData');

const getTokensForCard = (cardId) => {
    const partnerIds = cardPartnersMap[cardId];
    if(!partnerIds) return [];

    return partnerIds
    .map((partnerIds) => {
        const partner = mockPartners.find(p => p.id === partnerId && p.verified);
        if (partner) {
            return new GetTokenResponseDto(
                partner.id,
                partner.appName,
                partner.registrationDate
            );
        }
    })
    .filter(Boolean);
}

module.exports = { getTokensForCard };