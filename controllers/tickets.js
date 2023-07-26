const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
        const flight = Flight.findById(req.params.id)
        res.render('tickets/new', {
            title: "test",
            flight
    })
}

async function create(req, res) {
   const ticket = await Ticket.create(req.res)
   const flight_id = req.params.id
   ticket.flight.push(req.params.id)
   await ticket.save();
   res.redirect(`/flights/${flight_id}`)
}