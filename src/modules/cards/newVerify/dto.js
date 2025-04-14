function validateVerifyParams(params) {
  if (!params.otp) {
    throw new Error("Missing otp object");
  }
  if (typeof params.otp.id !== "number") {
    throw new Error("Invalid id in otp");
  }
  if (typeof params.otp.code !== "string") {
    throw new Error("Invalid code in otp");
  }
}

module.exports = { validateVerifyParams };
