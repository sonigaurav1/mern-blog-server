const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  posts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("User", userSchema);
