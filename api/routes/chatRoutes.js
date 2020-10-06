const express = require("express");
const chatRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Chat = require("../models/Chat");
const uuid = require("uuid");
const Message = require("../models/Message");
const v4 = uuid.v4;

// Get chat from "fromPerson" to "otherPerson", or create one
chatRouter.get("/getChat", async (req, res) => {
  try {
    const { fromPerson, otherPerson } = req.body;
    const chat = await Chat.findOne({ fromPerson, otherPerson });
    if (chat) {
      res.status(200).send(JSON.stringify(chat));
    } else {
      // Chat from "fromPerson" to "otherPerson"
      const newChat = new Chat({
        fromPerson,
        otherPerson,
        id: v4(),
        messages: [],
      });
      newChat.save((err) => {
        if (err) {
          res
            .send({
              err,
            })
            .status(500);
        } else {
          const revChat = new Chat({
            fromPerson: otherPerson,
            otherPerson: fromPerson,
            id: v4(),
            messages: [],
          });
          revChat.save((err) => {
            if (err) {
              res
                .send({
                  err,
                })
                .status(500);
            } else {
              res.send(JSON.stringify(newChat)).status(201);
            }
          });
        }
      });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Send message from "fromPerson" to "otherPerson"
chatRouter.post("/sendMessage", async (req, res) => {
  const { fromPerson, otherPerson, text } = req.body;
  try {
    const newMessage = new Message({
      text: text,
      fromPerson,
      otherPerson,
      timestamp: new Date().toUTCString(),
    });
    const revMessage = new Message({
      text: text,
      fromPerson: otherPerson,
      otherPerson: fromPerson,
      timestamp: new Date().toUTCString(),
    });
    newMessage.save((err) => {
      if (err) {
        throw err;
      }
    });
    revMessage.save((err) => {
      if (err) {
        throw err;
      }
    });
    let chat = await Chat.findOne({ otherPerson, fromPerson });
    if (!chat) {
      chat = new Chat({
        fromPerson,
        otherPerson,
        id: v4(),
        messages: [],
      });
      await chat.save();
    }
    let revChat = await Chat.findOne({
      otherPerson: fromPerson,
      fromPerson: otherPerson,
    });

    if (!revChat) {
      revChat = new Chat({
        fromPerson: otherPerson,
        otherPerson: fromPerson,
        id: v4(),
        messages: [],
      });
      await revChat.save();
    }
    revChat.messages.push(revMessage);
    chat.messages.push(newMessage);
    chat.save((err) => {
      if (err) {
        throw err;
      } else {
        revChat.save((err) => {
          if (err) {
            res.send(err).status(500);
          } else {
            res.json({}).status(201);
          }
        });
      }
    });
  } catch (err) {
    // console.log(err);
    res.send(err).status(500);
  }
});

// Get all messages of a chat
chatRouter.post("/getAllMessages", async (req, res) => {
  try {
    const { fromPerson, otherPerson } = req.body;
    let otherPersonEmail = await User.findOne({ _id: otherPerson });
    otherPersonEmail = otherPersonEmail.email;
    // console.log(otherPersonEmail);
    const allMessages = await Chat.findOne({
      fromPerson,
      otherPerson: otherPersonEmail,
    }).populate("messages");
    if (allMessages) {
      // console.log(allMessages);
      res.send(JSON.stringify(allMessages)).status(200);
    } else {
      res.send(JSON.stringify({}));
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = chatRouter;
