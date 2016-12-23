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
                    $("#iataCode").append(`<p><a name="aiportCode" data-id="${theData[i].iata}" href="#" >${theData[i].iata}</a></p>`);
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
        console.log("ARE YOU TALKING TO ME");
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

});