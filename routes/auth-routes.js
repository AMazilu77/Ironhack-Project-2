const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const FbStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// User model
const User = require("../models/user");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

authRoutes.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});

authRoutes.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("auth/signup", {
            message: "Indicate username and password"
        });
        return;
    }

    User.findOne({
            username
        })
        .then(user => {
            if (user !== null) {
                res.render("auth/signup", {
                    message: "The username already exists"
                });
                return;
            }

            const salt = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(password, salt);

            const newUser = new User({
                username,
                password: hashPass,

            });

            newUser.save((err) => {
                if (err) {
                    res.render("auth/signup", {
                        message: "Something went wrong"
                    });
                } else {

                    res.redirect("/dashBoard");
                }
            });
        })
        .catch(error => {
            next(error)
        })
});

authRoutes.get("/login", (req, res, next) => {
    res.render("auth/login", {
        "message": req.flash("error")
    });
});

authRoutes.post("/login", passport.authenticate("local", {
    successRedirect: "/private-page",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
}));

authRoutes.get("/dashBoard", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("dashBoard", {
        user: req.user
    });
});



authRoutes.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("private-page", {
        user: req.user
    });
    res.redirect("/dashBoard")
});

authRoutes.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

authRoutes.get("/auth/facebook", passport.authenticate("facebook"));
authRoutes.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "/private-page",
    failureRedirect: "/"
}));

authRoutes.get("/auth/google", passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
}));

authRoutes.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/private-page"
}));



module.exports = authRoutes;



// const express = require("express");
// const authRoutes = express.Router();
// const passport = require("passport");
// const ensureLogin = require("connect-ensure-login");



// // User model
// const User = require("../models/user");

// // Bcrypt to encrypt passwords
// const bcrypt = require("bcrypt");
// const bcryptSalt = 10;

// authRoutes.get("/signup", (req, res, next) => {
//     res.render("auth/signup");
// });

// authRoutes.post("/signup", (req, res, next) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (username === "" || password === "") {
//         res.render("auth/signup", {
//             message: "Indicate username and password"
//         });
//         return;
//     }

//     User.findOne({
//             username
//         })
//         .then(user => {
//             if (user !== null) {
//                 res.render("auth/signup", {
//                     message: "The username already exists"
//                 });
//                 return;
//             }

//             const salt = bcrypt.genSaltSync(bcryptSalt);
//             const hashPass = bcrypt.hashSync(password, salt);

//             const newUser = new User({
//                 username,
//                 password: hashPass,
//                 wishes: 3,
//                 luckyNumbers: [],
//                 numbersPlayed: []
//             });

//             newUser.save((err) => {
//                 if (err) {
//                     res.render("auth/signup", {
//                         message: "Something went wrong"
//                     });
//                 } else {
//                     res.redirect("/");
//                 }
//             });
//         })
//         .catch(error => {
//             next(error)
//         })
// });

// authRoutes.get("/login", (req, res, next) => {
//     res.render("auth/login", {
//         "message": req.flash("error")
//     });
// });

// authRoutes.post("/login", passport.authenticate("local", {
//     successRedirect: "/private-page",
//     failureRedirect: "/login",
//     failureFlash: true,
//     passReqToCallback: true
// }));