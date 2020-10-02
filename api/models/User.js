const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Can't create a user without a name"],
    trim: true,
  },
  chats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
    },
  ],
  email: {
    type: String,
  },
});
module.exports = mongoose.model("User", UserSchema);
