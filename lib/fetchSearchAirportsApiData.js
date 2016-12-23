const rest = require('restler');
const AirportModel = require("../models/airports");

class FetchApiData {
    static doFetchSearchAirportApiData(locationLatLong){
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flightstats.com/flex/airports/rest/v1/json/withinRadius/${locationLatLong[1]}/${locationLatLong[0]}/25?appId=2cccb310&appKey=6864fad77cd6b53600057eb03cbe0f70`).on('complete', function(airportResult) { 
                    if (airportResult instanceof Error) {
                       // console.log('Error:', result.message);
                        reject(airportResult);
                    } else {
                        //console.log(result);
                        let airportArray = [];

                        for (let i in airportResult.airports){
                            try {
                                let airport = new AirportModel(airportResult.airports[i]);
                                airportArray.push(airport);
                            } catch (e) {
                                //console.log(e);
                            }
                        }
                        console.log(airportArray);
                        resolve(airportArray);
                    }
                });
            }
        )
    }
}

module.exports = FetchApiData;