const moment = require('moment');

class PageController {

  // INDEX - GET /
  static airportsection(req , res) {
    res.render("posts/index")
 }


    static showAirports(req , res) {
    res.render("posts/departures",  {
         // session object is stored in the page
        departureDetails: req.session.departures,
        moment:moment
    }); 
    }

  static showAirportsArrivals(req , res) {
    res.render("posts/arrivals",  {
         // session object is stored in the page
        arrivalDetails: req.session.arrivals,
        moment:moment
        
    }); 
    
    }

    static showFlightData(req , res) {
        res.render("posts/flightDetails",  {
        // session object is stored in the page as another JSON Object
            flightDetails: req.session.flights
        }); 
    }


  
}

module.exports = PageController;