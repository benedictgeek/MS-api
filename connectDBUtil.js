const { mongodbUri } = require("./sharedCredentials");

module.exports.connectDB = (mongoose) => {
  try {
    return mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
};
