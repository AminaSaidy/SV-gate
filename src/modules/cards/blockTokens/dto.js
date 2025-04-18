class BlockTokensDto {
    constructor (id, time) {
        this.id = id;
        this.time = time;
    }
}

class BlockTokensResponseDto {
    constructor (id, code, message) {
        this.id = id;
        this.code = code;
        this.message = message;
    }
}

module.exports = { BlockTokensDto, BlockTokensResponseDto };
