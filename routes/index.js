const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const Winning = require("../models/winModel.js");
const luck = require("../models/luckyNumber");
const assert = require("assert");
const chalk = require("chalk");
// const axios = require("axios");
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/dashBoard", (req, res, next) => {
  res.render("dashBoard");
});

router.get("/userInfo", (req, res, next) => {
  res.render("userInfo");
});

router.post("userInfo", (req, res, next) => {
  console.log(req.body);
});

router.get("/userInfoLuck", (req, res, next) => {
  luck
    .find()
    .then(luck => {
      console.log(
        "pure unadulterated luck!! The User Info Luck Page is loading"
      );

      res.render("./userInfoLuck", {
        luck
      });
    })

    .catch(error => {
      console.log(error);
    });
});

router.post("userInfoLuck", (req, res, next) => {
  console.log(req.body);
});

router.get("/numberGen", (req, res, next) => {
  res.render("numberGen");
});

router.get("/WinningNumbers", (req, res, next) => {
  res.render("WinningNumbers");
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
      console.log("Mega win time!!!");

      res.render("megaWin", {
        winning
      });
    })

    .catch(error => {
      console.log(error);
    });
});

router.get("/yourNumbers", (req, res, next) => {
  res.render("yourNumbers");
});

router.get("/numberGenGamePick", (req, res, next) => {
  res.render("numberGenGamePick");
});
router.get("/pick2", (req, res, next) => {
  res.render("pick2");
});

router.post("/pick2", (req, res, next) => {
  User.NumbersPlayed.find()
    .then(NumbersPlayed => {
      console.log(" Number Posted!");

      res.render("pick2", {
        winning
      });
    })

    .catch(error => {
      console.log(error);
    });
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

// router.get('/LuckyNumbersPage/:id', (req, res, next) => {
//   let NumId = req.params.id;
//   if (!/^[0-9]{24}$/.test(NumId)) {
//     return res.status(404).render('not-found');
//   }
//   luckyNumbers.findOne({
//       '_id': NumId
//     })
//     .populate('luckyNumber')
//     .then(luck => {
//       if (!luck) {
//         return res.status(404).render('not-found');
//       }
//       res.render("/LuckyNumbersPage", {
//         luck
//       })
//     })
//     .catch(next)
// });

router.get("/LuckyNumbersPage", (req, res, next) => {
  luck
    .find()
    .then(luck => {
      console.log("two luck routes? Yes!");

      res.render("./LuckyNumbersPage", {
        luck
      });
    })

    .catch(error => {
      console.log(error);
    });
});

router.get("/LuckyNumbersPage/luckyNumbersAdd", (req, res, next) => {
  res.render("luckyNumbersAdd");
});
// post to add lucky numbers

router.post("/LuckyNumbersPage/luckyNumbersAdd", (req, res, next) => {
  const newNumber = new luck(req.body);
  console.log(
    chalk.magenta(
      "this is where the lucky number should be commented",
      req.body.luckyNumber,
      req.body.comments,
      newNumber
    )
  );
  newNumber
    .save()
    .then(luckyNumber => {
      res.redirect("/userInfo");
    })
    .catch(error => {
      console.log(chalk.red(error));
    });
});

router.get("/LuckyNumbersPage/:NumId", luck.findOne);

router.put("/LuckyNumberPage/:NumId", luck.update);

// Route.delete() requires a callback function but got a [object Undefined]
router.delete("/:_id", (req, res, next) => {
  const numberId = req.params._id;
  luck.remove({ _id: numberId });

  console.log(chalk.blue(req.params._id));
  luck.findByIdAndRemove({ _id: numberId }, (err, luck) => {
    if (err) console.log(err);
    else console.log("All gone, deleted");
  });
});

router.get("/LuckyNumbersPage/edit", (req, res, next) => {
  luck
    .findOne({
      _id: req.query.Num__id
    })
    .then(luckyNumber => {
      res.render("/LuckyNumbersPage", {
        luck
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// const numberAPI = axios.create({
//   baseURL: "https://data.ny.gov/resource/h6w8-42p9"
// });

// function getNumbers(id) {
//   numberAPI
//     .get(id)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

module.exports = router;
