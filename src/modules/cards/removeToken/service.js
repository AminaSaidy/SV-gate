const { RemoveTokenResponseDto } = require("./dto");
const {} = require("../../../common/mockData");

const removeTokens = (tokens) => {
  return tokens.map((id) => {
    if (tokensList.has(id)) {
      tokensList.delete(id);
      return new RemoveTokenResponseDto(id, 1);
    } else {
      return new RemoveTokenResponseDto(id, 0);
    }
  });
};

module.expoorts = { removeTokens };