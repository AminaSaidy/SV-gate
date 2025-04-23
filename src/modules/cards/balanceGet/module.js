const { balanceGetController } = require("./controller");

module.exports = (server) => {
  server.addMethod("balance.get", balanceGetController);
};
