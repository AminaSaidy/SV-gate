const { RemoveTokenResponseDto } = require("./dto");
const { tokensList } = require("../../../common/mockData");

const removeToken = (tokens) => {
  return tokens.map((id) => {
    if (tokensList.has(id)) {
      tokensList.delete(id);
      return new RemoveTokenResponseDto(id, 1);
    } else {
      return new RemoveTokenResponseDto(id, 0);
    }
  });
};

module.exports = { removeToken };