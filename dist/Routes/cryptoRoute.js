"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cryptoService_1 = __importDefault(require("../Services/cryptoService"));
const router = express_1.default.Router();
router.get("/crypto/:name", async (req, res) => {
    const result = await (0, cryptoService_1.default)(req.params.name);
    res.send(result);
});
module.exports = router;
