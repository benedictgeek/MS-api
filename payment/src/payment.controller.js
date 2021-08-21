const { publishTaskToQueue } = require("./publisher");

module.exports.pay = async (req, res, next) => {
  try {
    let body = { ...req.body };
    //we assume all payments are successful
    //publishing transaction details
    publishTaskToQueue(JSON.stringify(body));
    res.send("Processing payment");
  } catch (error) {
    res.status(400).send(error);
  }
};
