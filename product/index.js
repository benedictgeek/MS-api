const express = require("express");
const app = express();
const axios = require("axios");
const { connectDB } = require("./src/connectDb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 6060;

connectDB()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Product MS listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Product MS`, err);
  });
