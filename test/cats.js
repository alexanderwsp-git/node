var expect = require("chai").expect;
var https = require('https')
var request = require("request");

describe("Searching a cat", function () {

    describe("Cat status", function () {

        var url = "https://api.thecatapi.com/v1/images/search";

        it("get status from a cat", function (done) {
            request(url, { json: true }, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("compare a random url", function (done) {
            request(url, function (error, response, body) {                
                expect("https://cdn2.thecatapi.com/images/2gv.jpg").to.not.equal(JSON.parse(response.body)[0].url);
                done();
            });
        });

    });

});