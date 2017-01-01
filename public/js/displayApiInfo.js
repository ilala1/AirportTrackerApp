$(() => {

    /** 
    This is a description
    * On selecting search button shows the relevant data from the array
    */
    $("#submitSearch").click((e) => {
        e.preventDefault();
        let locationsearch = $('#search').val();

        $.ajax({
            url: '/search',
            method: 'POST',
            data: {
                city: $('#search').val()
            }
        })
            .then((data) => {
                let theData = data.result;
                console.log(theData);
                for (let i in theData) {//for each item in the object
                    $("#airportName").append(`<p>${theData[i].name}</p>`);
                    $("#countryName").append(`<p>${theData[i].city}</p>`);
                    $("#iataCode").append(`<p>${theData[i].iata}</p>`);
                    $("#arriveDepart").append(`<p><a name="aiportCode" data-id="${theData[i].iata}" href="#" >Departures /</a>
                    <a name="airportCodeArrival" data-id="${theData[i].iata}" href="#" >Arrivals</a></p>`);
                }
            });
    });

//click event for when an element on the body is clicked
    $('body').on('click', (event) => { 
        event.preventDefault();
        //if the event.target.id is true
        if (event.target.name === "aiportCode") {
            //visual rep of the element
            console.log($(event.target).attr("data-id"));
            //call the method with event.target.id e.g. LHR as the parameter
            updateServerWithData($(event.target).attr("data-id"));
        }
    });

    function updateServerWithData(departureDetails) {
        $.ajax({
            url: '/set-departures',
            method: 'POST',
            data: {
                airport: departureDetails
            }
        })
            .then((data) => {
                window.location.href = "/departures";
            });
    }

    //click event for when an element on the body is clicked ARRIVAL click
    $('body').on('click', (event) => { 
        event.preventDefault();
        //if the event.target.id is true
        if (event.target.name === "airportCodeArrival") {
            //visual rep of the element
            console.log($(event.target).attr("data-id"));
            //call the method with event.target.id e.g. LHR as the parameter
            updateServerWithArrivalData($(event.target).attr("data-id"));
        }
    });

    function updateServerWithArrivalData(arrivalDetails) {
        $.ajax({
            url: '/set-arrivals',
            method: 'POST',
            data: {
                airport: arrivalDetails
            }
        })
            .then((data) => {
                window.location.href = "/arrivals";

            });
    }

//click event for when an element on the body is clicked
    $('#airportDepartures').on('click', (event) => {
        event.preventDefault();
        //if the event.target.id is true
        if (event.target.name === "aiportCode") {
            //visual rep of the element
            console.log($(event.target).attr("data-id"));
            //call the method with event.target.id e.g. LHR as the parameter
            updateServerWithFlightDetailsData($(event.target).attr("data-id"));
        }
    });

    function updateServerWithFlightDetailsData(flightdetails) {
        $.ajax({
            url: '/set-details',
            method: 'POST',
            data: {
                flight: flightdetails
            }
        })
            .then((data) => {
                window.location.href = "/flightDetails";
            });
    }

    //click event for when an element on the body is clicked
    $('#airportArrivals').on('click', (event) => {
        event.preventDefault();
        //if the event.target.id is true
        if (event.target.name === "airportCodeArrival") {
            //visual rep of the element
            console.log($(event.target).attr("data-id"));
            //call the method with event.target.id e.g. LHR as the parameter
            updateServerWithFlightDetailsData2($(event.target).attr("data-id"));
        }
    });

    function updateServerWithFlightDetailsData2(flightdetails) {
        $.ajax({
            url: '/set-arrival-details',
            method: 'POST',
            data: {
                flight: flightdetails
            }
        })
            .then((data) => {
                window.location.href = "/flightDetails";
            });
    }

});