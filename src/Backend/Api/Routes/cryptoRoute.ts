import express, { Router, Request, Response } from "express";
import getCryptoById from "../Services/cryptoService";

const router: Router = express.Router();

router.get("/crypto/:name", async (req: Request, res: Response) => {
    const result = await getCryptoById(req.params.name);

    res.send(result);
});

module.exports = router;