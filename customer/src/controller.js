const axios = require("axios");
const mongoose = require("mongoose");
const { serviceUrls } = require("../../sharedCredentials");
const { Customer } = require("./customer.model");
module.exports.createCustomerOrder = async (req, res, next) => {
  try {
    let body = { ...req.body };
    //verify if customerId provided is valid
    try {
      await Customer.findById(body.customerId);
    } catch (error) {
      throw "Customer not found";
    }

    //verify if product to order exists
    let productData;
    try {
      const productResponse = await axios.get(
        `${serviceUrls.PRODUCT}/products/${body.productId}`
      );
      productData = productResponse.data;
    } catch (error) {
      throw "Product not found";
    }

    //go ahead to do the order
    let orderData;
    try {
      const orderResponse = await axios.post(
        `${serviceUrls.ORDER}/orders/create`,
        {
          productId: mongoose.Types.ObjectId(body.productId),
          customerId: mongoose.Types.ObjectId(body.customerId),
          amount: productData.amount,
          orderStatus: "pending",
        }
      );
      orderData = orderResponse.data;
    } catch (error) {
      throw "Order creation failed";
    }

    let response = {
      customerId: body.customerId,
      orderId: orderData._id,
      orderStatus: orderData.orderStatus,
      productId: body.productId,
    };

    res.send(response);
  } catch (error) {
    console.log("NOP DIDNT", error);
    res.status(400).send(error);
  }
};
