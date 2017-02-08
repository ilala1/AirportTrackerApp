const rest = require('restler');
const FLIGHT_DETAILS = process.env.FLIGHT_DETAILS;

class FetchFlightDetailApiData {
    static doFetchSearchFlightDetails(flightId){
        console.log(flightId);
        return new Promise(
            (resolve, reject) => {
                // calling the API with the arugements flightId as part of their parameters from UI
                rest.get(FLIGHT_DETAILS).on('complete', function(flightDetailsResult) {
                    if (flightDetailsResult instanceof Error) {
                        reject(Error);
                    } else {
                        console.log(flightDetailsResult);
                        resolve(flightDetailsResult);
                    }
                });
            }
        )
    }
}

module.exports = FetchFlightDetailApiData;