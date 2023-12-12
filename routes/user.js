const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const userController = require("../controllers/user.js");


router.route("/signup")
    .get((req, res) => {
        res.render("users/signup.ejs");
    })
    .post(wrapAsync(userController.signup))


router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true
        }),
        userController.login
    )


router.get("/logout", userController.logout);

module.exports = router;