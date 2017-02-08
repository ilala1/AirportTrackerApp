const rest = require('restler');
const AirportModel = require("../models/departures");
const FetchAirportDep = process.env.FetchAirportDep;

class FetchApiData {
    static doFetchSearchAirportDepartureApiData(airportcode) {
        console.log(`The airport is ${airportcode}`);
        return new Promise(
            (resolve, reject) => {
                //using restler(rest) to call the api, airportcode argument is the data from front end <a href> used a parameter 
                rest.get(FetchAirportDep).on('complete', function (DepartureResult) {
                    if (DepartureResult instanceof Error) {
                        // console.log('Error:', result.message);
                        reject(Error);
                    } else {
                        //new array created to sort filtered JSON Object from API call 
                        let airportDepartureArray = [];

                        for (let i in DepartureResult.flightTracks) {
                            try {
                                //instanciate new object from searchAirportDepartures class
                                let airport = new AirportModel(DepartureResult.flightTracks[i]);
                                // After validation of data has been approved insert the variable into the array
                                airportDepartureArray.push(airport);

                            } catch (e) {
                                console.log(e);
                            }
                        }
                        resolve(airportDepartureArray);
                    }
                });
            }
        )
    }
}

module.exports = FetchApiData;