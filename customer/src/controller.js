const axios = require("axios");
const mongoose = require("mongoose");
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
        `${process.env.PRODUCT_URL}/products/${body.productId}`
      );
      productData = productResponse.data;
    } catch (error) {
      // console.log("ERRORROR", error);
      throw "Product not found";
    }

    //go ahead to do the order
    let orderData;
    try {
      const orderResponse = await axios.post(
        `${process.env.ORDER_URL}/orders/create`,
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
    console.log("ERROR", error);
    res.status(400).send(error);
  }
};
