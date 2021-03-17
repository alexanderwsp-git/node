var expect = require("chai").expect;
const fetch = require('node-fetch');

describe("Users", function () {

    describe("Searching users", function () {
        it("get a user", async () => {
            await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
                //body: JSON.stringify("{'a':'a'}"),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(json => {
                console.log(json[0].email);
                expect("Sincere@april.bis").to.not.equal(json[0].email);
            });
        });
    });

});