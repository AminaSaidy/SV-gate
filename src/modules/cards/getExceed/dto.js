class ExceedResponseDto {
  constructor({
    id,
    username,
    pan,
    expiry,
    status,
    phone,
    fullName,
    balance,
    sms,
    pincnt,
    aacct,
    par,
    cardtype,
    holdAmount,
    cashbackAmount,
    exceedLimit,
  }) {
    this.id = id;
    this.username = username;
    this.pan = pan;
    this.expiry = expiry;
    this.status = status;
    this.phone = phone;
    this.fullName = fullName;
    this.balance = balance;
    this.sms = sms;
    this.pincnt = pincnt;
    this.aacct = aacct;
    this.par = par;
    this.cardtype = cardtype;
    this.holdAmount = holdAmount;
    this.cashbackAmount = cashbackAmount;
    this.exceedLimit = exceedLimit;
  }
}

module.exports = { ExceedResponseDto };
