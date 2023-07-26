const Flight = require('../models/flight');// connect to the model
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    newFlight
}

async function index (req, res) {
    const flights = await Flight.find({}); // getting the data
    res.render('flights/index',{ // displaying the model data on the flight's index file
        flights,
        title:"Flights"
    })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    res.render('flights/new',{
        title:"create new flight",
        // errorMsg : ""
    })
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try{
    await Flight.create(req.body).save();
    res.redirect('/flights'); 
    } catch (err){    
    res.redirect('/flights/new');
    }
    
}

async function show(req,res) {
    const flight = await Flight.findById(req.params.id)
    const ticket = await Ticket.findById({flight: flight._id})
    const airports = Flight.schema.path('airport').enumValues;

    nDestination = await flight.destinations;
    nDestination = nDestination.sort((a,b) => a.arrival - b.arrival);
    res.render('flights/show', {
        flight,
        title: "test",
        airports,
        nDestination,
        ticket
    });

}

