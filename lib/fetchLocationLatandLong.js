var NodeGeocoder = require('node-geocoder');
const API_KEY = process.env.API_KEY;


var options = {
  provider: 'google',


  httpAdapter: 'https', // Default
  apiKey: API_KEY,
  formatter: null         // 'gpx', 'string', ...
};

let geocoder = NodeGeocoder(options);

class FetchData {

  static doFetchData(AirportLocation){
   
      return new Promise(
          (resolve, reject) => {
            //the data is used to find relevant data, e.g. longitude,latitude, city 
              geocoder.geocode(AirportLocation)
                 .then(function(res) {
                   //get assign variable to get longitude & latitude 
                    let lat = res[0].latitude;
                    let long = res[0].longitude;
                  // the variables are stored as an array to be used as paramters in the APi link
                  // which is the next Promise being called
                    resolve([lat,long]);
                  })
                  .catch(function(err) {
                    reject(err);
                });
           });
      }
}

module.exports = FetchData;