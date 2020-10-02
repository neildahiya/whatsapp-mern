const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isSender: {
    type: Boolean,
    required: true,
  },
  timestamp: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
