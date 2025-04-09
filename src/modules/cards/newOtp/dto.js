class OTPDto { 
    constructor (card) {
        this.card = card;
    }
}

class Card {
    constructor (pan, expiry, sms = {}, requestorPhone = null) {
        this.pan = pan;
        this.expiry = expiry;
        this.sms = new SMS(sms);
        this. requestorPhone = requestorPhone;
    }
}

class SMS {
    constructor ({ussd = null, hash = null, templateId = 0, serviceName = null} = {}) {
        this.ussd = ussd;
        this.hash = hash;
        this.templateId = templateId;
        this.serviceName = serviceName;
    }
}

module.exports = { OTPDto };