const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LuckyNumbersSchema = new Schema(
  {
    luckyNumber: Number,
    comments: String
  },
  {
    timestamps: true
  }
);

const luck = mongoose.model("LuckyNumber", LuckyNumbersSchema);
module.exports = luck;
