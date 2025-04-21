const { unblockTokensController } = require("./controller");

module.exports = (server) => {
    server.addMethod("cards.unblock.tokens", unblockTokensController);
}