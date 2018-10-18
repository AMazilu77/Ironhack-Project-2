const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    luckyNumber: Number,
    comments: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Note, NoteSchema");
