const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { pay } = require("./src/payment.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initialize the worker
require("./src/worker");

app.post("/payments/pay", pay);

mongoose.connect(process.env.mongodbUri, (err) => {
  if (err) {
    return console.log(`Problem connecting to the Payment MS`, err);
  }
  app.listen(process.env.PAYMENT_PORT, () => {
    console.log(`Payment MS listening on ${process.env.PAYMENT_PORT}`);
  });
});
