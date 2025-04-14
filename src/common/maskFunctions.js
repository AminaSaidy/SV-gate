function maskPan(pan) {
  return pan.slice(0, 4) + "************";
}

function maskPhoneFront(phone) {
  if (!phone) return "";
  return "*".repeat(phone.length - 4) + phone.slice(-4);
}

function maskPhoneEnd(phone) {
  return phone.slice(0, 3) + "*********";
}

function maskAacct(aacct) {
  return aacct.slice(0, 5) + "**************" + aacct.slice(-5);
}

function maskToken(token) {
  return token.slice(0, 12) + "********************";
}

module.exports = {
  maskPan,
  maskPhoneFront,
  maskPhoneEnd,
  maskAacct,
  maskToken,
};
