const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    luckyNumbers: [],
    numbersPlayed: [],
    experiencePoints: {
        type: Number,
        default: 1
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




// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     username: String,
//     password: String,
//     facebookID: String,
//     googleID: String,
//     wishes: Number,
//     luckyNumbers: Number,
//     numbersPlayed: {
//         type: [Number]
//     },

// }, {
//     timestamps: {
//         createdAt: "created_at",
//         updatedAt: "updated_at"
//     },







// });

// const User = mongoose.model("User", userSchema);

module.exports = User;