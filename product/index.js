const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const { connectDB } = require("../connectDBUtil");
const { servicePorts } = require("../sharedCredentials");
const { findProduct } = require("./src/product.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/products/:productId", findProduct);

connectDB(mongoose)
  .then(async () => {
    app.listen(servicePorts.PRODUCT, () => {
      console.log(`Product MS listening on ${servicePorts.PRODUCT}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Product MS`, err);
  });
