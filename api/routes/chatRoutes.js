const express = require("express");
const chatRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
// chatRouter.get(
//   "/getMessages",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const { fromPerson, toPerson, message } = req.body;
//     try {
//       const allChats = await User.findOne({
//         email: fromPerson,
//       });
//       const requiredChat = allChats.find({
//         otherPerson: toPerson
//       })
//     } catch (error) {
//       res.status(500).json({
//         error,
//       });
//     }
//   }
// );

chatRouter.get("/allChats")

module.exports = chatRouter;
