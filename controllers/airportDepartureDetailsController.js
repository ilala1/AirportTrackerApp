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
            //result = [lat,long] from node.Geocoder
            //returns result and pass as arguements in next function
            return FetchSearchAirportApiData.doFetchSearchAirportApiData(result)
        })
        .then(result => {
             // turn the result into a json Object
                res.status(200).send({
                    result: result
                })
        })
        .catch(err => {
            res.status(400).send(err);
        })
    }



    static getAirportDepartureData(req, res) {
        //fetch the airport departure data from api using input from front end as argument
        FetchAirportDeparturesApiData.doFetchSearchAirportDepartureApiData(req.body.airport)
            .then(result => {
                //the data is stored as in a session as a Json Object
                req.session.departures = result;
                //the JSON object is sent to the page
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
                //the data is stored as in a session as a Json Object
                req.session.flights = result;
                //response is to send the JSON Object
                res.status(200).send({ result: result });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }

}
module.exports = Airport;