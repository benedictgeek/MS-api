const express = require("express");
const app = express();
const axios = require("axios");
const { connectDB } = require("./connectDb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 5050;

connectDB()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Customer MS listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Problem connecting to the Customer MS`, err);
  });
