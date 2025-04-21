const { throwError } = require("../../../error-handler/errorCodes");
const {
  generateOTP,
  incrementFailedAttempt,
  resetFailedAttempts,
} = require("../../../common/utilities");
const { maskPhoneFront } = require("../../../common/maskFunctions");
const { isCardBlocked } = require("../../../common/checks");
const { activeOTPs, mockCard1 } = require("../../../common/mockData");

function requestNewOtp(dto) {
  const { card } = dto; //"Pan invalid, wrong format!"

  if (isCardBlocked(card.pan)) {
    throwError(-205); //"Card is blocked!"
  }

  if (card.pan !== mockCard1.pan) {
    throwError(-202); //"Pan invalid, wrong format!"
  }

  if (card.expiry !== mockCard1.expiry) {
    incrementFailedAttempt(card.pan);
    throwError(-212); //"Pan or expiry invalid, wrong format!"
  }

  resetFailedAttempts(card.pan);

  if (card.requestorPhone && card.requestorPhone !== mockCard1.phone) {
    throwError(-320); //"The phone number attached to the card and the requesting phone number do not match!"
  }

  const existing = activeOTPs.get(card.pan);
  const now = Date.now();

  if (existing && existing.expiryTime > now) {
    return {
      id: Date.now(),
      phoneMask: maskPhoneFront(),
      token: "",
      verified: true,
    };
  }

  const otp = generateOTP();
  activeOTPs.set(card.pan, {
    token: otp,
    expiryTime: now + 2 * 60 * 1000,
  });

  return {
    id: Date.now(),
    phoneMask: maskPhoneFront(card.requestorPhone),
    token: "",
    verified: false,
  };
}

module.exports = { requestNewOtp };
