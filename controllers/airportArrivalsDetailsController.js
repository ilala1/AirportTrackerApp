const FetchLatLong = require("../lib/fetchLocationLatandLong");
const FetchSearchAirportApiData = require("../lib/fetchSearchAirportsApiData");
const FetchAirportArrivalsApiData = require("../lib/fetchAirportArrivals");
const FetchFlightDetailsApiData = require("../lib/fetchFlightDetails");



class Airport {
    /**
    * This is a description
    * @method search
    * @param {String} req - req.body.name string
    * @param {String} res -  string
    * @return {Promise} return JSON Object OF Airport
    */
    // static search(req, res) {
    //     //Fetch the lat and long from input data from front end (textfield)
    //     FetchLatLong.doFetchData(req.body.city).then(result => {
    //         //result = [lat,long] - from node.Geocoder
    //         //returns result and pass as arguements in next function
    //         return FetchSearchAirportApiData.doFetchSearchAirportApiData(result)
    //     })
    //         .then(result => {
    //             // turn the result into a json Object
    //             res.status(200).send({
    //                 //key: result   -   value: API JSON Object 
    //                 result: result
    //             })
    //         })
    //         .catch(err => {
    //             res.status(400).send(err);
    //         })
    // }


    /**
    * This is a description
    * @method getAirportArrivalData
    * @param {String} req - req.body.airport string
    * @param {String} res -  string
    * @return {Promise} return JSON Object of Airport Arrival details
    */
    static getAirportArrivalData(req, res) {
        //fetch the airport arrival data from api using input from front end as argument
        FetchAirportArrivalsApiData.doFetchSearchAirportArrivalsApiData(req.body.airport)
            .then(result => {
                //the data is stored as in a session as a Json Object
                req.session.arrivals = result;
                //the JSON object is sent to the page
                res.status(200).send({ result: result });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }

    /**
    * This is a description
    * @method doFetchSearchFlightDetails
    * @param {String} req - req.body.flight string
    * @param {String} res -  string
    * @return {Promise} return JSON Object of Individual flight details
    */
    static getFlightData(req, res) {
        //fetch the flight details data from api using input from front end as arguments
        FetchFlightDetailsApiData.doFetchSearchFlightDetails(req.body.flight)
            .then(result => {
                //the data is stored as in a session as a Json Object
                req.session.flights = result;
                //response is to send the JSON Object
                res.status(200).send({ result: result });
            })
            .catch(err => {
                
                res.status(400).send(err);
            });
    }

}
module.exports = Airport;