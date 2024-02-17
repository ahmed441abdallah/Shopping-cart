const mongoose = require("mongoose");

// Define product schema
const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    sizes: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
