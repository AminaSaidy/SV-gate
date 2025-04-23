const { listTokenController } = require("./controller");

module.exports = (server) => {
  server.addMethod("card.list.token", listTokenController);
};
