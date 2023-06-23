const express = require("express");
const authenticateUser = require("../middlewares/auth");

const {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  increaseLikeById,
} = require("../controllers/product");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getAllProducts)
  .post(authenticateUser,addProduct)
  .put(authenticateUser,updateProductById);
productRouter.route("/:id/like").put(increaseLikeById);
productRouter.route("/:id").get(getProductById);

module.exports = productRouter;