const express = require('express');
const router = express.Router();
const airportDetailController = require('../controllers/airportDepartureDetailsController');
const airportArrivalDetailController = require('../controllers/airportArrivalsDetailsController');

router.post("/search", airportDetailController.search);
router.post("/set-arrivals", airportArrivalDetailController.getAirportArrivalData);
router.post("/set-departures", airportDetailController.getAirportDepartureData);
router.post("/set-details", airportDetailController.getFlightData);
router.post("/set-arrival-details", airportDetailController.getFlightData);


module.exports = router;