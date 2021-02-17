const { response } = require("express");
const ProductModel = require("../models/product.model");

const getAll = async (req, res = response) => {
  try {
    const products = await ProductModel.find({
      quanty: { $gte: 1 },
      state: true,
    });

    res
      .json({
        products: products,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    throw new Error(`Ups! error ${error}`);
  }
};

const getById = async (req, res = response) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findOne({ _id: id });
    res.json(product).status(200);
  } catch (error) {
    console.log(error);
    throw new Error(`Ups! error ${error}`);
  }
};

const store = async (req, res = response) => {
  const { name, description, img, priceIn, priceOut, quanty } = req.body;
  const product = new ProductModel({
    name: name.toLowerCase(),
    description: description.toLowerCase(),
    img,
    priceIn: parseInt(priceIn),
    priceOut: parseInt(priceOut),
    quanty: parseInt(quanty),
  });

  product.save();
  res.json(product);
};

const update = async (req, res = response) => {
  const _id = req.params.id;
  const updated = await ProductModel.findByIdAndUpdate(_id, req.body);
  res.json(updated);
};

const remove = (req, res = response) => {
  res.json("store desde el controlador");
};

module.exports = {
  getAll,
  getById,
  store,
  update,
  remove,
};
