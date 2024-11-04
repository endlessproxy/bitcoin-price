"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Variables
const app = (0, express_1.default)();
const PORT = 8023;
// Endpoints Call
const homeRoute = require("./Routes/homeRoute");
const cryptoRoute = require("./Routes/cryptoRoute");
const cryptoList = require("./Routes/cryptoListRoute");
// Endpoints
app.use(homeRoute);
app.use(cryptoRoute);
app.use(cryptoList);
// Starting Server
app.listen(PORT, () => {
    console.log(`\nRunning server on: http://localhost:${PORT}\n`);
});
