const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const { connectDB } = require("../connectDBUtil");
const { servicePorts } = require("../sharedCredentials");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB(mongoose)
  .then(async () => {
    app.listen(servicePorts.PAYMENT, () => {
      console.log(`Payment MS listening on ${servicePorts.PAYMENT}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Order MS`, err);
  });
