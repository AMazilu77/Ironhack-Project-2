const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const Winning = require('../models/winModel.js');
const assert = require('assert');
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/dashBoard", (req, res, next) => {
  res.render("dashBoard");
});

router.get("/userInfo", (req, res, next) => {

  res.render("userInfo");
});

router.post("userInfo", (req, res, next) => {
  input_value.push(luckyNumbers)
})

router.get("/numberGen", (req, res, next) => {
  res.render("numberGen");
});

router.get("/WinningNumbers", (req, res, next) => {

  res.render("WinningNumbers")


});

// router.post("/insert", function (req, res, next) {
//   let findNumber = {
//     drawDate: req.body.drawDate,
//     winningNumber: req.body.winningNumber,
//     megaBall: req.body.megaBall
//   };

//   mongo.connect(URL, function (err, db) {
//     assert.equal(null, err);
//     db.collection('user-data').insert(DataTransferItem, function (err, result) {
//       assert.equal(null, error);
//       console.log("Item inserted");
//       db.close();
//     })
//   })

// })

router.get("/megaWin", (req, res, next) => {
  Winning.find()
    .then(winning => {
      console.log("Mega win time!!!")

      res.render("megaWin", {
        winning
      })
    })

    .catch(error => {
      console.log(error)
    })
})

router.get("/yourNumbers", (req, res, next) => {

  res.render("yourNumbers");
});

router.get("/numberGenGamePick", (req, res, next) => {
  res.render("numberGenGamePick");
});
router.get("/pick2", (req, res, next) => {
  res.render("pick2");
});

router.get("/pick3", (req, res, next) => {
  res.render("pick3");
});

router.get("/pick4", (req, res, next) => {
  res.render("pick4");
});

router.get("/pick5", (req, res, next) => {
  res.render("pick5");
});

router.get("/luckyMoney", (req, res, next) => {
  res.render("luckyMoney");
});

router.get("/fantasyFive", (req, res, next) => {
  res.render("fantasyFive");
});

router.get("/cashForLife", (req, res, next) => {
  res.render("cashForLife");
});

router.get("/floridaLotto", (req, res, next) => {
  res.render("floridaLotto");
});

router.get("/megaMillionsGenerator", (req, res, next) => {
  res.render("megaMillionsGenerator");
});

router.get("/powerBall", (req, res, next) => {
  res.render("powerBall");
});

router.get("/PBWinners", (req, res, next) => {
  res.render("powerBall");
});



// const numberAPI = axios.create({
//   baseURL: 'https://data.ny.gov/resource/h6w8-42p9.json'
// })

// function getNumbers(id) {
//   numberAPI.get(id)
//     .then(response => {
//       console.log(response.data)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }



module.exports = router;