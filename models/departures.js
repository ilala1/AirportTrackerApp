

class departures {

    constructor(obj){
        if (!obj.hasOwnProperty('departuredate').hasOwnProperty('dateLocal')){
            throw new Error("Missing departuredate");
        } else {
            this.date = obj.date;
        }

        if (!obj.hasOwnProperty('carrierFsCode')){
            throw new Error("Missing carrierFsCode");
        } else {
            this.carrierCode = obj.carrierFsCode;
        }

        if (!obj.hasOwnProperty('flightNumber')){
            throw new Error("Missing flightNumber");
        } else {
            this.flightNumber = obj.flightNumber;
        }
        
        if (!obj.hasOwnProperty('arrivalFsCode')){
            throw new Error("Missing arrivalFsCode");
        } else {
            this.arrivalFsCode = obj.arrivalFsCode;
        }

        if (!obj.hasOwnProperty('flightId')){
            throw new Error("Missing flightId");
        } else {
            this.flightId = obj.flightId;
        }
    }

}

module.exports = departures;