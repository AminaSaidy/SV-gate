const { getController } = require("./controller");

module.exports = (server) => {
  server.addMethod("cards.get", getController);
};
