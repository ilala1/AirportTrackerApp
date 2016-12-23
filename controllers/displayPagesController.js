class PageController {

  // INDEX - GET /
  static airportsection(req , res) {
    res.render("posts/index")
 }


    static showAirports(req , res) {
    res.render("posts/departures",  {
         // session object is stored in the page
        departureDetails: req.session.departures
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