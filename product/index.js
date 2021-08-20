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
    app.listen(servicePorts.PRODUCT, () => {
      console.log(`Product MS listening on ${servicePorts.PRODUCT}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Product MS`, err);
  });
