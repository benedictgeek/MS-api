const axios = require("axios");
const mongoose = require("mongoose");
const { serviceUrls } = require("../../sharedCredentials");
const { Order } = require("./order.model");

module.exports.createOrder = async (req, res, next) => {
  try {
    let body = { ...req.body };
    let order = await Order.create({ ...body });
    //make a call to payment service
    res.send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};
