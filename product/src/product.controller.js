const axios = require("axios");
const mongoose = require("mongoose");
const { serviceUrls } = require("../../sharedCredentials");
const { Product } = require("./product.model");

module.exports.findProduct = async (req, res, next) => {
  try {
    let body = { ...req.params };
    //fetch product if id provided exists
    let product;
    try {
      product = await Product.findById(body.productId);
    } catch (error) {
      throw "Product not found";
    }
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};
