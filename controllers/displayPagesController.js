class PageController {

  // INDEX - GET /
  static airportsection(req , res) {
    res.render("posts/index")
 }


    static showAirports(req , res) {
    res.render("posts/departures",  {
        departureDetails: req.session.departures
    }); 
    }


    static showFlightData(req , res) {
        console.log("WHAT THE FUCK");
        console.log(req.session.flights.flightStatus);
        res.render("posts/flightDetails",  {
            flightDetails: req.session.flights
        }); 
    }


  
}

module.exports = PageController;