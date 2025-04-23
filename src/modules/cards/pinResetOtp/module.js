const { pinResetOtpController } = require("./controller");

module.exports = (server) => {
  server.addMethod("card.pin.reset.otp", pinResetOtpController);
};
