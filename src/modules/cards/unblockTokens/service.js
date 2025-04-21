const { UnblockTokensResponseDto } = require("./dto");
const { blockedTokens } = require("../../../common/mockData");

const unblockTokens = (tokens) => {
  return tokens.map((id) => {
    blockedTokens.delete(id);
    return new UnblockTokensResponseDto(id, 0, "Token successfully unblocked!");
  });
};

module.exports = { unblockTokens };