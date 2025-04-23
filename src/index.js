const express = require("express");
const { JSONRPCServer } = require("json-rpc-2.0");
const cardsNewOtp = require("./modules/cards/newOtp/module.js");
const cardsNewVerify = require("./modules/cards/newVerify/module.js");
const cardsGetTokens = require("./modules/cards/getTokens/module.js");
const cardsRemoveToken = require("./modules/cards/removeToken/module.js");
const cardsBlockTokens = require("./modules/cards/blockTokens/module.js");
const cardsUnblockTokens = require("./modules/cards/unblockTokens/module.js");
const cardsGet = require("./modules/cards/get/module.js");
const cardsGetExceed = require("./modules/cards/getExceed/module.js");
const cardStatusChange = require("./modules/cards/statusChange/module.js");
const cardPinResetOtp = require("./modules/cards/pinResetOtp/module.js");
const cardPinResetVerify = require("./modules/cards/pinResetVerify/module.js");
const cardsListToken = require("./modules/cards/listToken/module.js");
const cardCheckPinfl = require("./modules/cards/checkPinfl/module.js");
const balanceGet = require("./modules/cards/balanceGet/module.js");
const cardsGetSdkid = require("./modules/cards/getSdkid/module.js");
const cardsSetTranscheme = require("./modules/cards/setTranscheme/module.js");

async function main() {
  const app = express();
  const server = new JSONRPCServer();

  cardsNewOtp(server);
  cardsNewVerify(server);
  cardsGetTokens(server);
  cardsRemoveToken(server);
  cardsBlockTokens(server);
  cardsUnblockTokens(server);
  cardsGet(server);
  cardsGetExceed(server);
  cardStatusChange(server);
  cardPinResetOtp(server);
  cardPinResetVerify(server);
  cardsListToken(server);
  cardCheckPinfl(server);
  balanceGet(server);
  cardsGetSdkid(server);
  cardsSetTranscheme(server);

  app.use(express.json());

  app.post("/rpc", (req, res) => {
    server.receive(req.body).then((jsonRPCResponse) => {
      if (jsonRPCResponse) {
        res.json(jsonRPCResponse);
      } else {
        res.sendStatus(204);
      }
    });
  });

  const port = 3000;
  app.listen(port, () =>
    console.log(`JSON-RPC server running on port ${port}`)
  );
}

main();
