"use strict";

const Router = require("koa-router");

const {
   fibonacciSeries
} = require("./controller/fibonacci");

const router = new Router();

router
    .get("/fibonacci/:number", fibonacciSeries)

module.exports = router;
