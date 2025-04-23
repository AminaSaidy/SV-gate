const { setTranschemeController } = require("./controller");

module.exports = (server) => {
    server.addMethod("cards.set.transcheme", setTranschemeController);
}