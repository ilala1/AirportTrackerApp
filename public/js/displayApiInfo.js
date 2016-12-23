$(() => {

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


    $('body').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
        //      console.log(event.target.id);//visual rep of the element that was clicked
        if (event.target.name === "aiportCode") {//if the event.target.id is true
            console.log($(event.target).attr("data-id"));//visual rep of the element
            updateServerWithData($(event.target).attr("data-id"));//call the method with event.target.id e.g. LHR as the parameter
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
                //      let theAirportData = data.result;
                //       console.log(theAirportData);
                //     console.log(data.result);
                //     for (let i in theAirportData){
                //         console.log(theAirportData[i]);
                //  for(let arrayindex = 0; arrayindex < theAirportData.length; arrayindex++ ){
                //         $("#putShitHere").append(`<p>${theAirportData[arrayindex].name}</p>`);
                //     }
                //     }
            });
    }


    $('#airportDepartures').on('click', (event) => {//click event for when an element on the body is clicked
        event.preventDefault();
        //      console.log(event.target.id);//visual rep of the element that was clicked
        if (event.target.name === "aiportCode") {//if the event.target.id is true
            console.log($(event.target).attr("data-id"));//visual rep of the element
            updateServerWithFlightDetailsData($(event.target).attr("data-id"));//call the method with event.target.id e.g. LHR as the parameter
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