const rest = require('restler');

class FetchFlightDetailApiData {
    static doFetchSearchFlightDetails(flightId){
        console.log(flightId);
        return new Promise(
            (resolve, reject) => {
                // calling the API with the arugements flightId as part of their parameters from UI
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${flightId}?appId=2cccb310&appKey=6864fad77cd6b53600057eb03cbe0f70`).on('complete', function(flightDetailsResult) {
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