module.exports.mongodbUri = "";

module.exports.rabbitmqurl = "amqp://localhost";

let servicePorts = {
  CUSTOMER: 5050,
  PRODUCT: 6060,
  ORDER: 7070,
  PAYMENT: 9090,
};

module.exports.servicePorts = servicePorts;

module.exports.serviceUrls = {
  CUSTOMER: `http://localhost:${servicePorts.CUSTOMER}`,
  PRODUCT: `http://localhost:${servicePorts.PRODUCT}`,
  ORDER: `http://localhost:${servicePorts.ORDER}`,
  PAYMENT: `http://localhost:${servicePorts.PAYMENT}`,
};
