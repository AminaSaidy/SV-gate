const failedAttempts = new Map(); // pan -> { count, blockedUntil }

function isCardBlocked(pan) {
    const data = failedAttempts.get(pan);
    if (!data) return false;
    if (data.blockedUntil && data.blockedUntil > Date.now()) return true;
  
    // Unblock if block time has passed
    if (data.blockedUntil) {
      failedAttempts.delete(pan);
      return false;
    }
  
    return false;
  }

  module.exports = { isCardBlocked };