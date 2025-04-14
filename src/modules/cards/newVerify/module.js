const { cardsNewVerify } = require("./controller");

module.exports = (server) => {
  server.addMethod("cards.new.verify", cardsNewVerify);
};
