const { getErrorMessage } = require("../../../error-handler/errorCodes");
const crypto = require("crypto");
const { mockCards } = require("../mockData");

function verifyOtpAndGenerateToken(params) {
  const { id, code } = params.otp;

  const card = mockCards.get(id);
  if (!card) {
    getErrorMessage(-294);
  }

  if (card.otp !== code) {
    getErrorMessage(-269);
  }

  const token = crypto.randomBytes(16).toString("hex").toUpperCase();
  card.token = token;

  return {
    id: maskToken(token),
    username: card.username,
    pan: maskPan(card.pan),
    status: card.status,
    phone: maskPhone(card.phone),
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

function maskPan(pan) {
    return pan.slice(0, 4) + "************";
}

function maskPhone(phone) {
    return phone.slice(0, 3) + "*********";
}

function maskAacct(aacct) {
    return aacct.slice(0, 5) + "**************" + aacct.slice(-5);
}

function maskToken(token) {
    return token.slice(0, 12) + "********************";
}

module.exports = { verifyOtpAndGenerateToken };