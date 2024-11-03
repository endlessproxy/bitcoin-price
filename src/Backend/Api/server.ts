import express, { Express, Request, Response } from "express";

// Variables
const app: Express = express();
const PORT: number = 8023;

// Endpoints Call
const homeRoute = require("./Routes/homeRoute.ts");
const cryptoRoute = require("./Routes/cryptoRoute.ts");
const cryptoList = require("./Routes/cryptoListRoute.ts");

// Endpoints
app.use(homeRoute);
app.use(cryptoRoute);
app.use(cryptoList);


// Starting Server
app.listen(PORT, () => {
    console.log(`\nRunning server on: http://localhost:${PORT}\n`)
});