const cardsGetTokens = require("./controller");

module.exports = (server) => {
    server.addMethod("cards.get.tokens", cardsGetTokens);
};
