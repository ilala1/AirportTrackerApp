class Airports {

    constructor(obj){
        if (!obj.hasOwnProperty('city')){
            throw new Error("Missing City");
        } else {
            //instancate object of "this" city
            //"this" is of the class Airports
            this.city = obj.city;
        }

        if (!obj.hasOwnProperty('iata')){
            throw new Error("Missing IATA");
        } else {
            this.iata = obj.iata;
        }

        if (!obj.hasOwnProperty('name')){
            throw new Error("Missing Name");
        } else {
            this.name = obj.name;
        }

        /* IMPORTANT 
         *  this helps filters the airports that aren't major
         *  Checking the classification of all Aiport - rating 1 (International) >> 5(low)
         *  if classification rating is 3 or less than it will use that Object
         */
        if (!obj.hasOwnProperty('classification')){
            throw new Error('Missing Classification');
        } else if (obj.classification > 3){
            throw new Error("Aiport is too small");
        } else {
            this.classification = obj.classification;
        }

    }

}

module.exports = Airports;