const { throwError } = require("../../../error-handler/errorCodes");
const {
  generateOTP,
  incrementFailedAttempt,
  resetFailedAttempts,
  maskPhone,
} = require("../../../common/utilities");
const { isCardBlocked } = require("../../../common/checks");

const mockCard = {
  pan: "860049******1234",
  expiry: "2605",
  phone: "998900000000",
};

const activeOTPs = new Map(); //pan -> { token, expiryTime }

function requestNewOtp(dto) {
  const { card } = dto; //"Pan invalid, wrong format!"

  if (isCardBlocked(card.pan)) {
    throwError(-205); //"Card is blocked!"
  }

  if (card.pan !== mockCard.pan) {
    throwError(-202); //"Pan invalid, wrong format!"
  }

  if (card.expiry !== mockCard.expiry) {
    incrementFailedAttempt(card.pan);
    throwError(-212); //"Pan or expiry invalid, wrong format!"
  }

  resetFailedAttempts(card.pan);

  if (card.requestorPhone && card.requestorPhone !== mockCard.phone) {
    throwError(-320); //"The phone number attached to the card and the requesting phone number do not match!"
  }

  const existing = activeOTPs.get(card.pan);
  const now = Date.now();

  if (existing && existing.expiryTime > now) {
    return {
      id: Date.now(),
      phoneMask: maskPhone(),
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
    phoneMask: maskPhone(card.requestorPhone),
    token: "",
    verified: false,
  };
}

module.exports = { requestNewOtp };
