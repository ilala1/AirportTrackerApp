var NodeGeocoder = require('node-geocoder');


var options = {
  provider: 'google',


  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyAZtC_bRltkDTBrUf9-pXlSSXUDVEaaV_I',
  formatter: null         // 'gpx', 'string', ...
};

let geocoder = NodeGeocoder(options);

class FetchData {

  static doFetchData(AirportLocation){
   
      return new Promise(
          (resolve, reject) => {
              geocoder.geocode(AirportLocation)
                 .then(function(res) {
                    let lat = res[0].latitude;
                    let long = res[0].longitude;
                    resolve([lat,long]);
                  })
                  .catch(function(err) {
                    reject(err);
                });
           });
      }
}

module.exports = FetchData;