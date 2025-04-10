const { throwError } = require("../../../checks/errorCodes");

const mockCard = {
  pan: "860049******1234",
  expiry: "2605",
  phone: "998900000000",
};

const failedAttempts = new Map(); // pan -> { count, blockedUntil }
const activeOTPs = new Map(); //pan -> { token, expiryTime }

function generateOTP() {
  return Math.floor(Math.random() * 900000 + 100000).toString();
}

function isCardBlocked(pan) {
  const data = failedAttempts.get(pan);
  if (!data) return false;
  if (data.blockedUntil && data.blockedUntil > Date.now()) return true;

  // Unblock if block time has passed
  if (data.blockedUntil) {
    failedAttempts.delete(pan);
    return false;
  }

  return false;
}

// Increment failed expiry attempt; block card after 3 tries
function incrementFailedAttempt(pan) {
  const data = failedAttempts.get(pan) || { count: 0 };
  data.count += 1;

  if (data.count >= 3) {
    data.blockedUntil = Date.now() + 4 * 60 * 60 * 1000;
  }

  failedAttempts.set(pan, data);
}

function resetFailedAttempts(pan) {
  failedAttempts.delete(pan);
}

function maskPhone(phone) {
  if (!phone) return "";
  return "*".repeat(phone.length - 4) + phone.slice(-4);
}

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
