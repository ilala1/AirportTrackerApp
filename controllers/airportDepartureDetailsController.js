const FetchLatLong = require("../lib/fetchLocationLatandLong");
const FetchSearchAirportApiData = require("../lib/fetchSearchAirportsApiData");
const FetchAirportDeparturesApiData = require("../lib/fetchAirportDeparture");
const FetchFlightDetailsApiData = require("../lib/fetchFlightDetails");


class Airport {
    /**
   * This is a description
   * @method search
   * @param {String} req - req.body.name string
   * @param {String} res -  string
   * @return {Object} return JSON Object
   */
    static search(req, res) {
        //Fetch the lat and long
        FetchLatLong.doFetchData(req.body.city).then(result => {
            return FetchSearchAirportApiData.doFetchSearchAirportApiData(result)
        })
        .then(result => {
                res.status(200).send({
                    result: result
                })
        })
        .catch(err => {
            res.status(400).send(err);
        })
    }



    static getAirportDepartureData(req, res) {
        FetchAirportDeparturesApiData.doFetchSearchAirportDepartureApiData(req.body.airport)
            .then(result => {
                req.session.departures = result;
                res.status(200).send({ result: result });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }


        static getFlightData(req, res) {
        FetchFlightDetailsApiData.doFetchSearchFlightDetails(req.body.flight)
            .then(result => {
                req.session.flights = result;
                //console.log(req.session.flights = result);
                res.status(200).send({ result: result });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }

}
module.exports = Airport;