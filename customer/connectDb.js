const mongoose = require("mongoose");
const { mongodbUri } = require("../sharedCredentials");

module.exports.connectDB = () => {
  return mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
