const { pinResetVerifyController } = require("./controller");

module.exports = (server) => {
  server.addMethod("card.pin.reset.verify", pinResetVerifyController);
};
