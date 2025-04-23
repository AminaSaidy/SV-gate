const { getSdkidController } = require("./controller");

module.exports = (server) => {
  server.addMethod("card.get.sdkid", getSdkidController);
};
