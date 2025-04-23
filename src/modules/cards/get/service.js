const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { cards } = require("../../../common/mockData");
const { CardResponseDto } = require("./dto");

const getCards = (ids) => {
  return ids.map((token) => {
    const card = cards.find((card) => card.id === token);

    if (!card) {
      throw getErrorMessage(-257); // Token Not Found
    }

    return new CardResponseDto(card);
  });
};

module.exports = { getCards };
