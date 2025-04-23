const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { mockCards } = require("../../../common/mockData");
const { CardInfoResponseDto } = require("./dto");

const getCards = (ids) => {
  return ids.map((token) => {
    const card = mockCards.find((card) => card.id === token);

    if (!card) {
      throw getErrorMessage(-257); // Token Not Found
    }

    return new CardInfoResponseDto(card);
  });
};

module.exports = { getCards };
