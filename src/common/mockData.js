const failedAttempts = new Map(); // pan -> { count, blockedUntil }
const activeOTPs = new Map(); //pan -> { token, expiryTime }

const mockCard1 = {
    pan: "860049******1234",
    expiry: "2605",
    phone: "998900000000",
  };

const mockCard2 = {
  otp: "230258",
  pan: "8600123412341234",
  username: "somename",
  status: 0,
  phone: "998901234567",
  fullName: "Cardholder Full Name",
  balance: 6082068610,
  sms: true,
  pincnt: 0,
  aacct: "01041212345600001",
  par: "123422618D661F6A89A62518DF654",
  cardtype: "private",
  holdAmount: 0,
  cashbackAmount: 0,
  token: null,
};

module.exports = { mockCard1, mockCard2, failedAttempts, activeOTPs};
