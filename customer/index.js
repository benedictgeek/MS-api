const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const { connectDB } = require("../connectDBUtil");
const { servicePorts } = require("../sharedCredentials");
const { createCustomerOrder } = require("./src/controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/customers/order", createCustomerOrder);

connectDB(mongoose)
  .then(async () => {
    app.listen(servicePorts.CUSTOMER, () => {
      console.log(`Customer MS listening on ${servicePorts.CUSTOMER}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Customer MS`, err);
  });
