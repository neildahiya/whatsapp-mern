// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Can't create a user without a name"],
//     trim: true,
//   },
//   chats: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "chat",
//     },
//   ],
//   email: {
//     type: String,
//   },
// });
// module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this);
    }
  });
};

module.exports = mongoose.model("User", UserSchema);
