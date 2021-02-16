const { response } = require("express");
const bcryptjs = require("bcryptjs");
const UserModel = require("../models/user.model");

const getUsers = (req, res = Response) => {
  res.json("get desde el controlador");
};

const storeUser = async (req, res = Response) => {
  const { password, name, email, role } = req.body;
  const user = new UserModel({
    name,
    email,
    password,
    role,
  });

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  user.save();
  res.json(user);
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
