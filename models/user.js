const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    facebookID: String,
    googleID: String,
    luckyNumbers: [],
    numbersPlayed: [{
        pick2: {
            ticket: [],
            type: Number,
            timestamps: {
                    createdAt: "created_at"},
        }
    }],


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
