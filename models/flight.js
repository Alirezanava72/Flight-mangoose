const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX','DEN', "SAN"],
        
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX','DEN', "SAN"],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function(){
            let date = new Date()
            let year = date.getFullYear();
            return date.setFullYear(year + 1);

            // return Date.now()+3652460601000;
        }
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flights', flightSchema);