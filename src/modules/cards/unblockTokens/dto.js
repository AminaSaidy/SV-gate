//CAN BE COMBINED WITH BLOCK TOKENS DTO 
class UnblockTokensResponseDto {
    constructor(id, code, message) {
      this.id = id;
      this.code = code;
      this.message = message;
    }
  }
  
  module.exports = { UnblockTokensResponseDto };