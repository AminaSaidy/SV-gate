const express = require("express");
const { JSONRPCServer } = require("json-rpc-2.0");
const cardNewOtpModule = require("./modules/cards/newOtp/module.js");

async function main() {
  const app = express();
  const server = new JSONRPCServer();

  cardNewOtpModule(server);

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
