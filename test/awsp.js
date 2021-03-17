var expect = require("chai").expect;
var awsp   = require("../app/awsp");

describe("Operations with numbesr", function () {

    describe("Additions", function () {
        it("add 2 numbers", function () {
            var add = awsp.addNumbers(2, 2);
            expect(add).to.equal(4);
        });
    });

    describe("Subtraction", function () {
        it("subtact 2 numbers", function () {
            var sub = awsp.subNumbers(4, 2);
            expect(sub).to.equal(2);
        });
    });
});