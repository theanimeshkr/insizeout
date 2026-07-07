const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");
const products = require("./data/products");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    // Delete existing products
    await Product.deleteMany();

    console.log("Old products deleted");

    // Insert products
    await Product.insertMany(products);

    console.log("Products imported successfully");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });