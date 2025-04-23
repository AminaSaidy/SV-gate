const { getExceedController } = require("./controller");

module.exports = (server) => {
  server.addMethod("cards.get.exceed", getExceedController);
};
