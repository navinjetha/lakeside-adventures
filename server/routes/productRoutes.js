const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

// Get all products from db
// route GET /api/products

router.get("/", getProducts);

// Get a prooduct by id from db
// route GET /api/products/:id
router.get("/:id", getProductById);

module.exports = router;