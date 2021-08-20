const mongoose = require("mongoose");

// Order Model
const OrderSchema = new mongoose.Schema(
  {
    orderStatus: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    productId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    customerId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
  },
  { strictQuery: true, timestamps: true }
);

module.exports.Order = mongoose.model("Order", OrderSchema);
