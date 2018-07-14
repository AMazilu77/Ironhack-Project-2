const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/dashBoard", (req, res, next) => {
  res.render("dashBoard");
});

router.get("/numberGen", (req, res, next) => {
  res.render("numberGen");
});

router.get("/WinningNumbers", (req, res, next) => {
  res.render("WinningNumbers");
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

router.get("/megaMillions", (req, res, next) => {
  res.render("megaMillions");
});

router.get("/powerBall", (req, res, next) => {
  res.render("powerBall");
});

module.exports = router;