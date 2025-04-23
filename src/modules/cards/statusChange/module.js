const {statusChangeController } = require("./controller");

module.exports = (server) => {
    server.addMethod("cards.status.change", statusChangeController);
}