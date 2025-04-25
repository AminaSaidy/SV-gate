const {statusChangeController } = require("./controller");

module.exports = (server) => {
    server.addMethod("card.status.change", statusChangeController);
}