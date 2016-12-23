const express = require('express');
const router = express.Router();
const displayPageController = require('../controllers/displayPagesController');

router.get("/",displayPageController.airportsection)
router.get("/departures", displayPageController.showAirports);
router.get("/flightDetails", displayPageController.showFlightData);

module.exports = router;