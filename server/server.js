const { json } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

const app = express();
app.use(json());
// routes
app.get("/", (req, res) => {
  res.send("hello node api");
});

// operation
// get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// get product by id
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// add products
app.post("/products", async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// remove from api
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "  can not find any product with this is" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
mongoose
  .connect(
    "mongodb+srv://ahmedabdaalh027:1234Aa@cluster0.orsxiyk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to db!");
    app.listen(3004, () => {
      console.log("Api app is running on port 3004");
    });
  });
