const newOtpController = require('./controller');

function registerNewOtpModule(server) {
    server.addMethod('cards.new.otp', newOtpController.requestOTP);
}

module.exports = registerNewOtpModule;