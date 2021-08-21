const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { createCustomerOrder } = require("./src/controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/customers/order", createCustomerOrder);

mongoose.connect(process.env.mongodbUri, (err) => {
  if (err) {
    return console.log(`Problem connecting to the Customer MS`, err);
  }
  app.listen(process.env.CUSTOMER_PORT, () => {
    console.log(`Customer MS listening on ${process.env.CUSTOMER_PORT}`);
  });
});
