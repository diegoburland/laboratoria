const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("roles", RoleSchema);
