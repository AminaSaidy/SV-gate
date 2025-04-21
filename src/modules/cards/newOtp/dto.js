class OTPDto {
  constructor(cardData) {
    this.card = new Card(
      cardData.pan,
      cardData.expiry,
      cardData.sms,
      cardData.requestorPhone
    );
  }
}

class Card {
  constructor(pan, expiry, sms = {}, requestorPhone = null) {
    this.pan = pan;
    this.expiry = expiry;
    this.sms = new SMS(sms);
    this.requestorPhone = requestorPhone;
  }
}

class SMS {
  constructor({ ussd = null, hash = null, templateId = 0, serviceName } = {}) {
    this.ussd = ussd;
    this.hash = hash;
    this.templateId = templateId;
    this.serviceName = serviceName;
  }
}

module.exports = { OTPDto, Card, SMS };
