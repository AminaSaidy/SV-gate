// const { statusChangeService } = require("./service");
// const { StatusChangeRequestDTO, StatusChangeResponseDTO } = require("./dto");
// const { throwError } = require("../../../error-handler/errorCodes");

// const statusChangeController = async ({ params }) => {
//   const { card } = params || {};

//   if (!card) {
//     throwError(-200);
//   }

//   const dto = new StatusChangeRequestDTO(card);
//   const result = await statusChangeService(dto);
//   return new StatusChangeResponseDTO(result);
// };

// module.exports = { statusChangeController };
