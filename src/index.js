const express = require ('express');
const { JSONRPCServer } = require('json-rpc-2.0');
const { bodyParse } = require('body-parse');

async function main() {
    const app = express();
    const server = new JSONRPCServer();
    
    app.use(bodyParse.json());
}