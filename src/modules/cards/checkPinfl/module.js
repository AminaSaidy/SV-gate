const { checkPinflController } = require("./controller");

module.exports = (server) => {
  server.addMethod("card.check.pinfl", checkPinflController);
};
