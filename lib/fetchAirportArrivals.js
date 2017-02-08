const rest = require('restler');
const searchAirportArrivals = require("../models/arrivals");
const FetchAirportArr = process.env.FetchAirportArr;

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
                rest.get(FetchAirportArr).on('complete', function (arrivalResult) {
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