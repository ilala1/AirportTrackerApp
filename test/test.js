const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const assert = require("chai").assert;
const FetchData = require("../models/airports");// get the file functions.js


// function alternative syntax =>
//describe - mocha function - describe what we are trying to achieve- what your test does
// group test to make  sense
//done function callback to say unit test has finished


var airportDetails = {
    city: "london",
    iata: "LHR",
    name: "London Heathrow Airport",
    classification: 2
}

describe("Search Airport ", () => {
    it("should match model structure", (done) => {/* SHOULD */
        const airportObj = new FetchData(airportDetails);
        assert.isObject(airportObj, "it is an object");
        done();
    })
});