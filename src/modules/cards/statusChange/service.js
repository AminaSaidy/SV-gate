// const { cards } = require("../../../common/mockData");
// const { throwError } = require("../../../error-handler/errorCodes");

// const statusChangeService = async (dto) => {
//   const card = cards.find(c => c.cardId === dto.cardId);

//   if (!card) throwError(-200);
//   if (card.issuer !== "BANK") throwError(-276);

//   card.statusId = dto.statusId;

//   return {
//     id: "1463497",
//     username: card.username,
//     refNum: "TXREF123456",
//     ext: dto.ext,
//     pan: card.pan,
//     expiry: card.expiry,
//     tranType: dto.statusId === 20 ? "CARDBLOCK" : "CARDUNBLOCK",
//     date7: "0916152746",
//     date12: "190916152746",
//     amount: 0,
//     currency: "860",
//     stan: dto.stan,
//     field38: "123456",
//     field48: null,
//     field91: null,
//     merchantId: dto.merchantId,
//     terminalId: dto.terminalId,
//     resp: 0,
//     respText: "Successful transaction",
//     respSV: "00",
//     status: "OK"
//   };
// };

// module.exports = { statusChangeService };
