const mongoose = require('mongoose');
const User = require('../models/user');


const dbtitle = 'the-lottery-genie';
let TheConnection = mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useMongoClient: true,
});

User.collection.drop();

const users = [{
    username: 'bob',
    wishes: 3,
    luckyNumbers: 33,
    numbersPlayed: []

}]


User.create(users, (err) => {
    if (err) console.log('error', err);
    else console.log('the user is saved and its value is: ', users)
    mongoose.connection.close();

});