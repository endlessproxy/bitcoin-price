import express, { Router, Request, Response } from "express";
import getCryptoCurrencyList from "../Services/cryptoListService";

const router: Router = express.Router();

router.get("/crypto", async (req: Request, res: Response) => {
    const result = await getCryptoCurrencyList();

    res.send(result);
});

module.exports = router;