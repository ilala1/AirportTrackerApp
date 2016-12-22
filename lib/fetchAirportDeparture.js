const rest = require('restler');
const AirportModel = require("../models/departures");

class FetchApiData {
    static doFetchSearchAirportDepartureApiData(airportcode){
        console.log(`The airport is ${airportcode}`);
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/tracks/${airportcode}/dep?appId=2cccb310&appKey=6864fad77cd6b53600057eb03cbe0f70&includeFlightPlan=false&maxPositions=2&maxFlights=20`).on('complete', function(DepartureResult) {   
                    if (DepartureResult instanceof Error) {
                       // console.log('Error:', result.message);
                        reject(DepartureResult);
                    } else {
                        //console.log(result);
                        let airportDepartureArray = [];

                        for (let i in DepartureResult.airports){
                            try {
                                let airport = new departuresModel(DepartureResult.airports[i]);
                                airportDepartureArray.push(airport);
                            } catch (e) {
                                //console.log(e);
                            }
                        }

 
                        resolve(DepartureResult);
                    }
                });
            }
        )
    }
}

module.exports = FetchApiData;