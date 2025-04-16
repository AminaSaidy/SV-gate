const { getTokensController } = require("./controller");

module.exports = (server) => {
    server.addMethod("cards.get.tokens", getTokensController);
};
