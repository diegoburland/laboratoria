const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  priceIn: {
    type: Number,
    required: true,
  },
  priceOut: {
    type: Number,
    required: true,
  },
  quanty: {
    type: Number,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("products", ProductSchema);
