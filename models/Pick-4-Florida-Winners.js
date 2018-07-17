let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Winning_schema = new Schema({
    a_date: Date,
    a_string: String
});

const Winning = mongoose.model('a_string', Winning_schema);
module.exports = Winning_schema;


pick4Winners = [{
        "date": "07 / 14 / 18",
        "winningNum": "E 8 - 1 - 6 - 4"
    },
    {
        "date": "07 / 14 / 18",
        "winningNum": "M 2 - 1 - 3 - 3"
    }
    // {
    //     07 / 13 / 18 E 4 - 2 - 5 - 0
    // },
    // {
    //     07 / 13 / 18 M 6 - 6 - 7 - 3
    // },
    // {
    //     07 / 12 / 18 E 4 - 0 - 7 - 2
    // },
    // {
    //     07 / 12 / 18 M 4 - 7 - 2 - 3
    // },
    // {
    //     07 / 11 / 18 E 7 - 0 - 3 - 0
    // },
    // {
    //     07 / 11 / 18 M 5 - 4 - 4 - 9
    // },
    // {
    //     07 / 10 / 18 E 1 - 9 - 1 - 5
    // },
    // {
    //     07 / 10 / 18 M 9 - 6 - 4 - 1
    // },
    // {
    //     07 / 09 / 18 E 8 - 2 - 9 - 3
    // },
    // {
    //     07 / 09 / 18 M 2 - 1 - 6 - 0
    // },
    // {
    //     07 / 08 / 18 E 4 - 1 - 3 - 9
    // },
    // {
    //     07 / 08 / 18 M 0 - 5 - 2 - 6
    // },
    // {
    //     07 / 07 / 18 E 8 - 7 - 2 - 4
    // },
    // {
    //     07 / 07 / 18 M 5 - 2 - 3 - 2
    // },
    // {
    //     07 / 06 / 18 E 3 - 3 - 5 - 5
    // },
    // {
    //     07 / 06 / 18 M 3 - 1 - 5 - 8
    // },
    // {
    //     07 / 05 / 18 E 0 - 2 - 7 - 8
    // },
];