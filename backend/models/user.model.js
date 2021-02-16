const { Schema, mode } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    emun: ["ADMIN", "BUYER"],
  },
  state: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("users", UserSchema);
