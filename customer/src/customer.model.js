const mongoose = require("mongoose");

// Customer Model
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { strictQuery: true, timestamps: true }
);

module.exports.Customer = mongoose.model("Customer", customerSchema);
