class OTPDto {
    constructor (card, sms) {
        this.card = card;
        this.sms = sms;
    }
}

class Card {
    constructor (pan, expiry) {
        this.pan = pan;
        this.expiry = expiry;
    }
}

class SMS {
    constructor (ussd, hash, templateId, serviceName, requestorPhone) {
        this.ussd = ussd;
        this.hash = hash;
        this.templateId = templateId;
        this.serviceName = serviceName;
        this. requestorPhone = requestorPhone;
    }
}