"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function getCryptoCurrencyList() {
    const request = await axios_1.default.get("https://api.coincap.io/v2/assets");
    let response = [];
    const data = request.data.data;
    response = Object.keys(data).map(key => data[key].id);
    return response;
}
exports.default = getCryptoCurrencyList;
