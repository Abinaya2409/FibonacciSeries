"use strict";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
const should = require("should");

chai.use(chaiHttp);

describe("Fibonacci Series", () => {

    describe("Get fibonacci series", () => {
        it("it should get fibonacci series", (done) => {
            chai
                .request(server)
                .get("/fibonacci/8")
                .end((err, res) => {
                    if (err) done(err)
                    should(res.status).be.exactly(200);
                    done();
                });
        });
    });
});
