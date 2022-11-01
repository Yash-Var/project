const product = require("../models/product");


const getALLProduct = async (req, res) => {
    const products=await product.find({
        name: 'vase table',
    })
  res.status(200).json({ products,nbHits:products.length});
};
const getProduct = async (req, res) => {
  res.status(200).json({ msg: "testing" });
};

module.exports = {
  getALLProduct,
  getProduct,
};
