const newOtpController = require("./controller");

function registerNewOtp(server) {
  server.addMethod("cards.new.otp", newOtpController.requestOTP);
}

module.exports = registerNewOtp;
