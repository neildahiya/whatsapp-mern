const mongoose = require("mongoose");
const Message = require("./Message");

const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  fromPerson: {
    type: String,
    required: true,
  },
  otherPerson: {
    type: String,
    required: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

module.exports = mongoose.model("Chat", ChatSchema);
