let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    date: {
        type: date,
        required: true,
    },
    number: {
        type: number,
        required: true,
    }
});