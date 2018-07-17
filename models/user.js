const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    facebookID: String,
    googleID: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },

    numbersPlayed: {
        numbers: [Number]
    }




});

const User = mongoose.model("User", userSchema);

module.exports = User;