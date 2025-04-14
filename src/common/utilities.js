const crypto = require("crypto");
const {failedAttempts} = require("./mockData");

function generateOTP() {
  return Math.floor(Math.random() * 900000 + 100000).toString();
}

function generateToken() {
 return crypto.randomBytes(16).toString("hex").toUpperCase();
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

module.exports = {
  generateOTP,
  incrementFailedAttempt,
  resetFailedAttempts,
  generateToken
};
