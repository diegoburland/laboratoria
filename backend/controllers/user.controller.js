const { response } = require("express");

const getUsers = (req, res = Response) => {
  res.json("get desde el controlador");
};

const storeUser = (req, res = Response) => {
  res.json("store desde el controlador");
};

const updateUser = (req, res = Response) => {
  res.json("store desde el controlador");
};

const deleteUser = (req, res = Response) => {
  res.json("store desde el controlador");
};

module.exports = {
  getUsers,
  storeUser,
  updateUser,
  deleteUser,
};
