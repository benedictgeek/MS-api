const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { connectDB } = require("../connectDBUtil");
const { servicePorts } = require("../sharedCredentials");
const { pay } = require("./src/payment.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initialize the worker
require("./src/worker");

app.post("/payments/pay", pay);

connectDB(mongoose)
  .then(async () => {
    app.listen(servicePorts.PAYMENT, () => {
      console.log(`Payment MS listening on ${servicePorts.PAYMENT}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Order MS`, err);
  });
