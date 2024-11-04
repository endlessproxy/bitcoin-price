"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cryptoModel_1 = __importDefault(require("../Models/cryptoModel"));
async function getCryptoById(cryptoId) {
    const request = await axios_1.default.get(`https://api.coincap.io/v2/assets/${cryptoId}`);
    const priceFloat = parseFloat(request.data.data.priceUsd).toFixed(2);
    const response = {
        id: request.data.data.id,
        symbol: request.data.data.symbol,
        priceFloat
    };
    const cryptoData = new cryptoModel_1.default(response.id, response.symbol, priceFloat);
    return cryptoData;
}
exports.default = getCryptoById;
