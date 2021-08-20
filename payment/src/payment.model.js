const mongoose = require("mongoose");

// Payment Model
const PaymentSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    orderId: {
      type: mongoose.SchemaTypes.ObjectId,
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

module.exports.Payment = mongoose.model("Payment", PaymentSchema);
