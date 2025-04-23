const { getExceedController } = require("./controller");

module.exports = (server) => {
  server.addMethod("card.get.exceed", getExceedController);
};
