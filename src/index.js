const express = require("express");
const { JSONRPCServer } = require("json-rpc-2.0");
const cardsNewOtp = require("./modules/cards/newOtp/module.js");
const cardsNewVerify = require("./modules/cards/newVerify/module.js");
const cardsGetTokens = require("./modules/cards/getTokens/module.js");

async function main() {
  const app = express();
  const server = new JSONRPCServer();

  cardsNewOtp(server);
  cardsNewVerify(server);
  cardsGetTokens(server);

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
