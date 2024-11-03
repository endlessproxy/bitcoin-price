import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 8023;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
});

app.get("/bitcoin", (req: Request, res: Response) => {
    res.send("O bitcoin está custando: $395.213");
});

app.listen(PORT, () => {
    console.log(`\nRunning server on: http://localhost:${PORT}\n`)
});