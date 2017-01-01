class Arrivals {

    constructor(obj) {
        if (!obj.hasOwnProperty('departureDate')) {
            throw new Error("Missing departuredate");
        } else {
            this.date = obj.departureDate.dateLocal;
        }

        if (!obj.hasOwnProperty('carrierFsCode')) {
            throw new Error("Missing carrierFsCode");
        } else {
            this.carrierCode = obj.carrierFsCode;
        }

        if (!obj.hasOwnProperty('flightNumber')) {
            throw new Error("Missing flightNumber");
        } else {
            this.flightNumber = obj.flightNumber;
        }

        if (!obj.hasOwnProperty('departureAirportFsCode')) {
            throw new Error("Missing departureAirportFsCode");
        } else {
            this.departureAirportCode = obj.departureAirportFsCode;
        }

        if (!obj.hasOwnProperty('flightId')) {
            throw new Error("Missing flightId");
        } else {
            this.flightId = obj.flightId;
        }
    }

}

module.exports = Arrivals;