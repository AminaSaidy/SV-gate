const { getErrorMessage } = require("../../../error-handler/errorCodes");
const { mockCard2 } = require("../../../common/mockData");
const { generateToken } = require("../../../common/utilities");
const {
  maskPhoneEnd,
  maskPan,
  maskAacct,
  maskToken,
} = require("../../../common/maskFunctions");

//CHECK IF TOKEN FOR THIS CARD ALREADY EXISTS NEEDED
function verifyOtpAndGenerateToken(params) {
  const { id, code } = params.otp;

  const card = mockCard2;
  if (!card) {
    getErrorMessage(-294);
  }

  if (card.otp !== code) {
    getErrorMessage(-269);
  }

  const token = generateToken();
  card.token = token;

  return {
    id: maskToken(token),
    username: card.username,
    pan: maskPan(card.pan),
    status: card.status,
    phone: maskPhoneEnd(card.phone),
    fullName: card.fullName,
    balance: card.balance,
    sms: card.sms,
    pincnt: card.pincnt,
    aacct: maskAacct(card.aacct),
    par: card.par,
    cardtype: card.cardtype,
    holdAmount: card.holdAmount,
    cashbackAmount: card.cashbackAmount,
  };
}

module.exports = { verifyOtpAndGenerateToken };
