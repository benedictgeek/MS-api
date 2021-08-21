const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const { findProduct } = require("./src/product.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/products/:productId", findProduct);


mongoose.connect(process.env.mongodbUri, (err) => {
  if (err) {
    return console.log(`Problem connecting to the Product MS`, err);
  }
  app.listen(process.env.PRODUCT_PORT, () => {
    console.log(`Product MS listening on ${process.env.PRODUCT_PORT}`);
  });
});



