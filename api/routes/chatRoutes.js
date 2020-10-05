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
          res.send(JSON.stringify(newChat)).status(201);
        }
      });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Send message from "fromPerson" to "otherPerson"
chatRouter.post("/sendMessage", async (req, res) => {
  const { fromPerson, otherPerson, message } = req.body;
  try {
    const newMessage = new Message({
      text: message,
      fromPerson,
      otherPerson,
      timestamp: new Date().toUTCString(),
    });
    newMessage.save((err) => {
      if (err) {
        throw err;
      }
    });
    const chat = await Chat.findOne({ otherPerson, fromPerson });

    // console.log(chat);
    // console.log(typeof chat.messages);
    chat.messages.push(newMessage);
    chat.save((err) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.send("Sent").status(201);
      }
    });
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
});

// Get all messages of a chat
chatRouter.get("/getAllMessages", async (req, res) => {
  try {
    const { fromPerson, otherPerson } = req.body;
    const allMessages = await Chat.findOne({
      fromPerson,
      otherPerson,
    }).populate("messages");
    if (allMessages) {
      res.send(JSON.stringify(allMessages)).status(200);
    } else {
      throw "Couldn't find the messages";
    }
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = chatRouter;
