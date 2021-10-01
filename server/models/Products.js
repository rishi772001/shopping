const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
