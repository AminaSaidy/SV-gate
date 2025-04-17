class GetTokenRequestDto {
    constructor(id) {
        this.id = id;
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