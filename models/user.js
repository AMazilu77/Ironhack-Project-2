const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    facebookID: String,
    googleID: String,
    luckyNumbers: [],
    // schema for each game user saves numbers for 
    numbersPlayed: {
        // counter to tell how many sets of numbers you have saved
        nextPick2: Number,
        //    array of saved tickets 
        pick2: [{
            Ticket: Number,
            SavedAt: Date,
            pick2Numbers: [],
        },],


    },
    experiencePoints: {
        type: Number,
        default: 100
    },

    wishes: {
        type: Number,
        default: 3
    },


}, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    });

const User = mongoose.model("User", userSchema);

module.exports = User;
