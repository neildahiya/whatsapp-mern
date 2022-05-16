const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
// const Todo = require("../models/Todo");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "NeilDahiya",
      sub: userID,
    },
    "NeilDahiya",
    { expiresIn: "1h" }
  );
};

userRouter.post(
  "/register",
  // passport.authenticate("local", { session: false }),
  async (req, res) => {
    const { username, email, password, role } = req.body;
    console.log(username,email,role);
    try {
      const user = await User.findOne({ email });
      
      if (user) {
        return res.status(400).json({
          message: { msgBody: "Email is already taken", msgError: true },
        });
      }
      const newUser = await User.crete({username, email, password, role});
      
      return res.status(201).json({
        message: {
          msgBody: "Account successfully created",
          msgError: false,
        },
      });
    } catch(err) {
      console.log(err);
      return res.status(500).json({
        message: { msgBody: "Error has occured", msgError: true } 
      });
    }
  }
);

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    console.log(req.user);
    if (req.isAuthenticated()) {
      const { _id, username, role } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
  }
);
userRouter.get(
  "/getUser",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("here");
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, success: true });
  }
);
userRouter.get(
  "/allChats",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const allUsers = await User.find();
      if (allUsers) {
        res.status(200).send(JSON.stringify(allUsers));
      } else {
        throw "Some error occurred";
      }
    } catch (err) {
      res.send(err).status(500);
    }
  }
);
userRouter.get(
  "/getAllUsers",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // console.log(req.user);
    try {
      console.log(req.user);
      let allUsers = await User.find();
      if (allUsers) {
        allUsers = allUsers.filter((user) => user.email !== req.user.email);
        res.status(200).send(JSON.stringify(allUsers));
      } else {
        throw "Some error occurred";
      }
    } catch (err) {
      res.send(err).status(500);
    }
  }
);

// userRouter.post('/todo',passport.authenticate('jwt',{session : false}),(req,res)=>{
//     const todo = new Todo(req.body);
//     todo.save(err=>{
//         if(err)
//             res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
//         else{
//             req.user.todos.push(todo);
//             req.user.save(err=>{
//                 if(err)
//                     res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
//                 else
//                     res.status(200).json({message : {msgBody : "Successfully created todo", msgError : false}});
//             });
//         }
//     })
// });

// userRouter.get('/todos',passport.authenticate('jwt',{session : false}),(req,res)=>{
//     User.findById({_id : req.user._id}).populate('todos').exec((err,document)=>{
//         if(err)
//             res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
//         else{
//             res.status(200).json({todos : document.todos, authenticated : true});
//         }
//     });
// });

userRouter.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.user.role === "admin") {
      res
        .status(200)
        .json({ message: { msgBody: "You are an admin", msgError: false } });
    } else
      res.status(403).json({
        message: { msgBody: "You're not an admin,go away", msgError: true },
      });
  }
);

// userRouter.get(
//   "/authenticated",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { username, role } = req.user;
//     res.status(200).json({ isAuthenticated: true, user: { username, role } });
//   }
// );
userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      if (!req.user) {
        throw "Some error occurred";
      }
      const user = req.user;
      res.status(200).send(JSON.stringify(user));
    } catch (err) {
      console.log(err);
      res.send(err).status(500);
    }
  }
);

module.exports = userRouter;
