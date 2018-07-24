let mongoose = require('mongoose').set('debug', true);;
let Schema = mongoose.Schema;

let Winning_Mega_Schema = new Schema({
    drawDate: String,
    winningNumber: String,
    // winningNumbers1: String,
    // winningNumbers2: String,
    // winningNumbers3: String,
    // winningNumbers4: String,
    // winningNumbers5: String,
    rules: String,
    megaBall: String,
    multiplier: String
});

const Winning = mongoose.model('Mega', Winning_Mega_Schema);
module.exports = Winning;




















// Winning.create({
//     drawDate: "07 / 20 / 2018",
//     winningNumbers: "01 14 30 44 62",
//     megaBall: "01",


// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "07 / 17 / 2018",
//     winningNumbers: "40 41 61 66 67",
//     megaBall: "12",

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "07/13/2018",
//     winningNumbers: "21 22 39 59 68",
//     megaBall: "02",

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "07/10/2018",
//     winningNumbers: "01 17 28 56 70",
//     megaBall: "14",

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "07/06/2018",
//     winningNumbers: "02 10 46 50 56",
//     megaBall: "16",

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });


// Winning.create({
//     drawDate: "07/03/2018",
//     winningNumbers: "13	35 45 49 68 ",
//     megaBall: "23",
//     multiplier: "02"

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "06/29/18",
//     winningNumbers: "02 32 47 49 68",
//     megaBall: "23",
//     multiplier: "04"

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "07 / 17 / 2018",
//     winningNumbers: "40 41 61 66 67",
//     megaBall: "12",

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });

// Winning.create({
//     drawDate: "07 / 17 / 2018",
//     winningNumbers: "40 41 61 66 67",
//     megaBall: "12",

// }, function (err, user) {
//     if (err) console.log('error', err);
//     else console.log('the user is saved and its value is: ', user)

// });