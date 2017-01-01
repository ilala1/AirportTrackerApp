const rest = require('restler');
const searchAirportArrivals = require("../models/arrivals");

class FetchApiData {


    /** 
    This is a description
    * @method doFetchSearchFlightDetails
    * @param {String} airportcode - string - from front end a href id "View Arrivals"
    * @return {Promise}  return  data called from API 
    * collect Arrival data from API call and filters out irrelevant data within the object
    */

    static doFetchSearchAirportArrivalsApiData(airportcode) {
        return new Promise(
            (resolve, reject) => {
                //using restler(rest) to call the api   - airportcode argument is the data from front end <a href> used a parameter 
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/tracks/${airportcode}/arr?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047&includeFlightPlan=false&maxPositions=2&maxFlights=20`).on('complete', function (arrivalResult) {
                    if (arrivalResult instanceof Error) {
                        reject(Error);
                    } else {
                        //make a new array to sorted filtered JSON Object from API call 
                        let arrivalArray = [];

                        for (let i in arrivalResult.flightTracks) {
                            try {
                                //instanciate new object from searchAirportArrivals class
                                let arrivals = new searchAirportArrivals(arrivalResult.flightTracks[i]);
                                // Once the validation of data has been approved insert the variable into the array
                                arrivalArray.push(arrivals);
                            } catch (e) {

                            }
                        }
                        resolve(arrivalArray);
                    }
                });
            })
    }
}
module.exports = FetchApiData;