const mongoose = require('mongoose');
const Winning = require('../models/winModel');
const luck = require('../models/luckyNumber');
const dbtitle = 'the-lottery-genie';

mongoose.connect(`mongodb://localhost/${dbtitle}`);

Winning.collection.drop();
luck.collection.drop();



const luckynumber = [{
        luckyNumber: 33,
        comments: "Favorite"
    },

    {
        luckyNumber: 13,
        comments: "number of kids saved from cave flood in Tialand"
    },


    {
        luckyNumber: 3,
        comments: "Trinity"
    },

    {
        luckyNumber: 1,
        comments: "Starting point"

    }
];
const experiencePoints = 1;
const wishes = 0;
const megaNum = [{

        drawDate: "2018-07-20",
        megaBall: "01",
        multiplier: "02",
        winningNumber: "01 14 30 44 62"

    },
    {
        drawDate: "2018-07-17",
        megaBall: "12",
        multiplier: "05",
        winningNumber: "40 41 61 66 67"
    },
    {
        drawDate: "2018-07-13",
        megaBall: "02",
        multiplier: "02",
        winningNumber: "21 22 39 59 68"
    },
    {
        drawDate: "2018-07-10",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "01 17 28 56 70"
    },
    {
        drawDate: "2018-07-06",
        megaBall: "16",
        multiplier: "03",
        winningNumber: "02 10 46 50 56"
    },
    {
        drawDate: "2018-07-03",
        megaBall: "23",
        multiplier: "02",
        winningNumber: "13 35 45 49 68"
    },
    {
        drawDate: "2018-06-29",
        megaBall: "23",
        multiplier: "04",
        winningNumber: "02 32 47 49 68"
    },
    {
        drawDate: "2018-06-26",
        megaBall: "19",
        multiplier: "02",
        winningNumber: "17 25 29 39 60"
    },
    {
        drawDate: "2018-06-22",
        megaBall: "20",
        multiplier: "02",
        winningNumber: "02 06 11 27 44"
    },
    {
        drawDate: "2018-06-19",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "11 13 28 65 70"
    },
    {
        drawDate: "2018-06-15",
        megaBall: "06",
        multiplier: "02",
        winningNumber: "01 11 37 47 51"
    },
    {
        drawDate: "2018-06-12",
        megaBall: "03",
        multiplier: "02",
        winningNumber: "01 03 05 08 70"
    },
    {
        drawDate: "2018-06-08",
        megaBall: "13",
        multiplier: "02",
        winningNumber: "14 30 33 44 56"
    },
    {
        drawDate: "2018-06-05",
        megaBall: "04",
        multiplier: "02",
        winningNumber: "22 33 41 48 52"
    },
    {
        drawDate: "2018-06-01",
        megaBall: "17",
        multiplier: "03",
        winningNumber: "05 24 52 62 66"
    },
    {
        drawDate: "2018-05-29",
        megaBall: "02",
        multiplier: "03",
        winningNumber: "02 11 55 58 67"
    },
    {
        drawDate: "2018-05-25",
        megaBall: "25",
        multiplier: "04",
        winningNumber: "11 14 51 64 68"
    },
    {
        drawDate: "2018-05-22",
        megaBall: "09",
        multiplier: "03",
        winningNumber: "16 17 21 36 48"
    },
    {
        drawDate: "2018-05-18",
        megaBall: "11",
        multiplier: "02",
        winningNumber: "09 26 53 64 66"
    },
    {
        drawDate: "2018-05-15",
        megaBall: "21",
        multiplier: "02",
        winningNumber: "21 34 44 49 61"
    },
    {
        drawDate: "2018-05-11",
        megaBall: "22",
        multiplier: "03",
        winningNumber: "14 38 40 53 70"
    },
    {
        drawDate: "2018-05-08",
        megaBall: "13",
        multiplier: "02",
        winningNumber: "08 15 39 64 67"
    },
    {
        drawDate: "2018-05-04",
        megaBall: "21",
        multiplier: "04",
        winningNumber: "04 05 10 12 18"
    },
    {
        drawDate: "2018-05-01",
        megaBall: "01",
        multiplier: "04",
        winningNumber: "02 07 20 55 70"
    },
    {
        drawDate: "2018-04-27",
        megaBall: "11",
        multiplier: "02",
        winningNumber: "02 29 38 63 66"
    },
    {
        drawDate: "2018-04-24",
        megaBall: "10",
        multiplier: "03",
        winningNumber: "03 19 31 32 48"
    },
    {
        drawDate: "2018-04-20",
        megaBall: "04",
        multiplier: "02",
        winningNumber: "01 15 18 32 45"
    },
    {
        drawDate: "2018-04-17",
        megaBall: "22",
        multiplier: "04",
        winningNumber: "12 34 44 47 65"
    },
    {
        drawDate: "2018-04-13",
        megaBall: "10",
        multiplier: "04",
        winningNumber: "08 09 32 42 59"
    },
    {
        drawDate: "2018-04-10",
        megaBall: "20",
        multiplier: "02",
        winningNumber: "05 13 31 43 53"
    },
    {
        drawDate: "2018-04-06",
        megaBall: "20",
        multiplier: "04",
        winningNumber: "16 33 51 54 67"
    },
    {
        drawDate: "2018-04-03",
        megaBall: "14",
        multiplier: "02",
        winningNumber: "04 29 39 42 62"
    },
    {
        drawDate: "2018-03-30",
        megaBall: "01",
        multiplier: "03",
        winningNumber: "11 28 31 46 59"
    },
    {
        drawDate: "2018-03-27",
        megaBall: "13",
        multiplier: "03",
        winningNumber: "07 25 43 56 59"
    },
    {
        drawDate: "2018-03-23",
        megaBall: "17",
        multiplier: "03",
        winningNumber: "04 08 23 53 59"
    },
    {
        drawDate: "2018-03-20",
        megaBall: "09",
        multiplier: "03",
        winningNumber: "14 38 51 64 70"
    },
    {
        drawDate: "2018-03-16",
        megaBall: "11",
        multiplier: "03",
        winningNumber: "01 13 26 33 52"
    },
    {
        drawDate: "2018-03-13",
        megaBall: "17",
        multiplier: "05",
        winningNumber: "06 30 58 60 61"
    },
    {
        drawDate: "2018-03-09",
        megaBall: "22",
        multiplier: "04",
        winningNumber: "07 17 18 46 66"
    },
    {
        drawDate: "2018-03-06",
        megaBall: "22",
        multiplier: "05",
        winningNumber: "01 04 26 35 39"
    },
    {
        drawDate: "2018-03-02",
        megaBall: "08",
        multiplier: "04",
        winningNumber: "24 28 42 60 64"
    },
    {
        drawDate: "2018-02-27",
        megaBall: "23",
        multiplier: "03",
        winningNumber: "10 17 21 38 43"
    },
    {
        drawDate: "2018-02-23",
        megaBall: "09",
        multiplier: "04",
        winningNumber: "07 11 13 19 58"
    },
    {
        drawDate: "2018-02-20",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "17 19 23 24 43"
    },
    {
        drawDate: "2018-02-16",
        megaBall: "16",
        multiplier: "03",
        winningNumber: "14 38 48 53 58"
    },
    {
        drawDate: "2018-02-13",
        megaBall: "01",
        multiplier: "04",
        winningNumber: "05 12 15 46 49"
    },
    {
        drawDate: "2018-02-09",
        megaBall: "14",
        multiplier: "03",
        winningNumber: "28 34 41 46 47"
    },
    {
        drawDate: "2018-02-06",
        megaBall: "25",
        multiplier: "03",
        winningNumber: "14 17 25 48 58"
    },
    {
        drawDate: "2018-02-02",
        megaBall: "04",
        multiplier: "03",
        winningNumber: "01 04 14 17 40"
    },
    {
        drawDate: "2018-01-30",
        megaBall: "24",
        multiplier: "03",
        winningNumber: "29 41 42 49 57"
    },
    {
        drawDate: "2018-01-26",
        megaBall: "01",
        multiplier: "04",
        winningNumber: "10 16 27 38 43"
    },
    {
        drawDate: "2018-01-23",
        megaBall: "07",
        multiplier: "04",
        winningNumber: "02 06 30 31 55"
    },
    {
        drawDate: "2018-01-19",
        megaBall: "23",
        multiplier: "03",
        winningNumber: "03 17 23 49 66"
    },
    {
        drawDate: "2018-01-16",
        megaBall: "18",
        multiplier: "03",
        winningNumber: "03 11 23 29 59"
    },
    {
        drawDate: "2018-01-12",
        megaBall: "24",
        multiplier: "04",
        winningNumber: "17 18 33 46 60"
    },
    {
        drawDate: "2018-01-09",
        megaBall: "23",
        multiplier: "03",
        winningNumber: "16 29 31 65 67"
    },
    {
        drawDate: "2018-01-05",
        megaBall: "10",
        multiplier: "03",
        winningNumber: "28 30 39 59 70"
    },
    {
        drawDate: "2018-01-02",
        megaBall: "22",
        multiplier: "04",
        winningNumber: "01 42 47 64 70"
    }
];


const WinnerList = megaNum.map(number => {
    const NumberX = new Winning(number)
    return NumberX.save()
        .then(NumberX => {
            return NumberX.winningNumber;
        })
        .catch(error => {
            throw new Error(`Impossible to add the winner. ${error}`)
        })
})

const FavNum = luckynumber.map(zxc => {
    const numPrint = new luck(zxc);
    return numPrint.save()
        .then(numPrint => {
            return numPrint.luckynumber
        })
        .catch(error => {
            throw new Error(`Impossible to add your lucky Number. ${error}`)
        })

})


// let findNumbers = Promise.all(MegaMillionMaker)
//     .then(numbers => {
//         return NumberX.map(NumberX => {
//             return numberX.findOne({
//                     drawDate: Winning.drawDate,
//                     winningNumber: winning.winningNumber
//                 })

//                 .then(number => {
//                     if (!number) {
//                         throw new Error(` ${winning.WinningNumber} has not won`);
//                     }
//                     return Object.assign({}, number, {
//                         Winner: winningNumber._id
//                     });
//                 })
//         });
//     })







// const luckyCharms = luckyNumbers.map(number => {
//     const luckX = new LuckyNumber(Luck)
//     return luckX.save()
//         .then(luckX => {
//             return luckX.user
//         })
// })

// const WishMaster = Wishes.map(wishNumber => {
//     const WishX = new Wish
// })