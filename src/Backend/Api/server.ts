import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 8023; 

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`\nRunning server on: http://localhost:${PORT}\n`)
});