require("dotenv").config();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");

app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(express.json());//used for fetching data from frontend, because data is in json format
app.use(cookieParser(""));
app.use(cors());

const router = require("./routes/router");
app.use(router);
const port = process.env.PORT || 8005;

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");


app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});

DefaultData();
