const { removeTokenController } = require("./controller");

module.exports = (server) => {
  server.addMethod("cards.remove.token", removeTokenController);
};
