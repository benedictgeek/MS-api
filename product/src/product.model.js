const mongoose = require("mongoose");

// Customer Model
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { strictQuery: true, timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
