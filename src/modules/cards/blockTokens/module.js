const { blockTokensController } = require("./controller");

module.exports = (server) => {
    server.addMethod("cards.block.tokens", blockTokensController);
}