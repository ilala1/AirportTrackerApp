const rest = require('restler');

class FetchFlightDetailApiData {
    static doFetchSearchFlightDetails(flightId){
        console.log(flightId);
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${flightId}?appId=2cccb310&appKey=6864fad77cd6b53600057eb03cbe0f70`).on('complete', function(flightDetailsResult) {
                    if (flightDetailsResult instanceof Error) {
                       // console.log('Error:', result.message);
                        reject(flightDetailsResult);
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