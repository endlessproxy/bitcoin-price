import express, { Router, Request, Response} from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

module.exports = router;