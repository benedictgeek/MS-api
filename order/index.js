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
    app.listen(servicePorts.ORDER, () => {
      console.log(`Order MS listening on ${servicePorts.ORDER}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Order MS`, err);
  });
