const Flight = require('../models/flight');// connect to the model

module.exports = {
    index,
    new: newFlight
}

async function index (req, res) {
    const flights = await Flight.find(); // getting the data
    res.render('flights/index',{ // displaying the model data on the flight's index file
        flights,
        title:"Flights"
    })
}

function newFlight(req, res) {
    res.render('flights/new',{
        title:"create new flight"
        // error msg
    })
}