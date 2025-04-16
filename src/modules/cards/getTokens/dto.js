class GetTokenRequestDto {
    constructor(cardId) {
        this.cardId = cardId;
    }
}

class GetTokensResponseDto {
    constructor(id, appName, registrationDate) {
        this.id = id;
        this.appName = appName;
        this.registrationDate = registrationDate;
    }
}

module.exports = { GetTokenRequestDto, GetTokensResponseDto }; 