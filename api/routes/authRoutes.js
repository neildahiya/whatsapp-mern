var passport = require("passport");
const express = require("express");
const router = express.Router();
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function (req, res) {
    var token = req.user.token;
    // console.log(req.user);
    res.redirect("http://localhost:3000?token=" + token);
  }
);
module.exports = router;
