const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LuckyNumbersSchema = new Schema({
    luckyNumber: Number,
    comments: String
});

const luck = mongoose.model('LuckyNumber', LuckyNumbersSchema);
module.exports = luck;