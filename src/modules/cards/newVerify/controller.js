const { validateVerifyParams } = require("./dto");
const { verifyOtpAndGenerateToken } = require("./service");

function cardsNewVerify(params) {
  validateVerifyParams(params);
  const result = verifyOtpAndGenerateToken(params);
  return result;
}

module.exports = { cardsNewVerify };
