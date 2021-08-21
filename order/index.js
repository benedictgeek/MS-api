const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const { connectDB } = require("../connectDBUtil");
const { servicePorts } = require("../sharedCredentials");
const { createOrder } = require("./src/order.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/orders/create", createOrder);

connectDB(mongoose)
  .then(async () => {
    app.listen(servicePorts.ORDER, () => {
      console.log(`Order MS listening on ${servicePorts.ORDER}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Order MS`, err);
  });
