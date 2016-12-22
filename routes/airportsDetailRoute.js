const express = require('express');
const router = express.Router();
const airportDetailController = require('../controllers/airportDepartureDetailsController');



router.post("/search", airportDetailController.search);
router.post("/set-departures", airportDetailController.getAirportDepartureData);
router.post("/set-details", airportDetailController.getFlightData);


module.exports = router;