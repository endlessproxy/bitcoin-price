"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cryptoListService_1 = __importDefault(require("../Services/cryptoListService"));
const router = express_1.default.Router();
router.get("/crypto", async (req, res) => {
    const result = await (0, cryptoListService_1.default)();
    res.send(result);
});
module.exports = router;
