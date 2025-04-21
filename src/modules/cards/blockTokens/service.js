const { blockedTokens } = require("../../../common/mockData");
const { BlockTokensResponseDto } = require("./dto");

//LOGIC FOR CODE 0 IS NEEDED
const blockTokens = (tokens) => {
  return tokens.map(({ id, time }) => {
    const blockUntil = Date.now() + time * 60 * 100 + 1000;
    blockedTokens.set(id, blockUntil);

    return new BlockTokensResponseDto(id, 0, "Token successfully blocked!");
  });
};

module.exports = { blockTokens };
