const rest = require('restler');
const AirportModel = require("../models/airports");

class FetchApiData {
    static doFetchSearchAirportApiData(locationLatLong){
        return new Promise(
            (resolve, reject) => {
                 //using restler (rest) to  call api with Airports with 25mile radius. 
                 //locationLatLong argument is data from from previous promise used as parameters 
                rest.get(`https://api.flightstats.com/flex/airports/rest/v1/json/withinRadius/${locationLatLong[1]}/${locationLatLong[0]}/25?appId=2cccb310&appKey=6864fad77cd6b53600057eb03cbe0f70`).on('complete', function(airportResult) { 
                    if (airportResult instanceof Error) {
                       
                        reject(airportResult);
                    } else {
                        //new array created
                        let airportArray = [];

                        // for each item in API data airports
                        for (let i in airportResult.airports){
                            try {
                                // pass the JSON object to the model function in AirportModel
                                let airport = new AirportModel(airportResult.airports[i]);
                                // after validation insert into airportArray
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