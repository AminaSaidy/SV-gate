const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { mockCards2 } = require("../../../common/mockData");
const { ExceedResponseDto } = require("./dto");

const getExceed = (ids) => {
  return ids.map((token) => {
    const card = mockCards2.find((card) => card.id === token);

    if (!card) {
      throw getErrorMessage(-257); // Token Not Found
    }

    return new ExceedResponseDto(card);
  });
};

module.exports = { getExceed };
