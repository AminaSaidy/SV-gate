const { getErrorMessage } = require('../checks/errorCodes');

const mockCard = {
    pan: '860049******1234',
    expiry: '2605',
    phone: '998900000000'
};

const failedAttempts = new Map(); // pan -> { count, blockedUntil }
const activeOTPs = new Map(); //pan -> { token, expiryTime }

function generateOTP() {
    return Math.floor(Math.random() * 900000 + 100000).toString();
}

function isCardBlocked(pan) {
    const data = failedAttempts.get(pan);
    if(!data)return false;
    if (data.blockedUntil && data.blockedUntil > Date.now()) return true;

    if (data.blockedUntil) {
        failedAttempts.delete(pan);
        return false;
    }

    return false;
}

function incrementFailedAttempt(pan) {
    const data = failedAttempts.get(pan) || { count: 0 };
    data.count += 1;

    if(data.count >= 3) {
        data.blockedUntil = Date.now() + 4 * 60 * 60 * 1000;
    }

    failedAttempts.set(pan, data);
}

function resetFailedAttempts(pan) {
    failedAttempts.delete(pan);
}