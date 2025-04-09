const newOtpService = require('./service');
const { OTPDto } = require('./dto');

async function requestOTP(params) {
    const dto = new OTPDto(params.card);
    return newOtpService.requestNewOtp(dto);
}

module.exports = { requestOTP };