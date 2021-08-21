const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { createOrder } = require("./src/order.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/orders/create", createOrder);

mongoose.connect(process.env.mongodbUri, (err) => {
  if (err) {
    return console.log(`Problem connecting to the Order MS`, err);
  }
  app.listen(process.env.ORDER_PORT, () => {
    console.log(`Order MS listening on ${process.env.ORDER_PORT}`);
  });
});
