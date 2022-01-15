const { model, Schema } = require('mongoose');

const playerSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        min: 2
    },
    club: {
        type: String,
        required: true,
        min: 3
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = model('players', playerSchema);