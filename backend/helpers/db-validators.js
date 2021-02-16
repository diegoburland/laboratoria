const RoleModel = require("../models/role.model");
const UserModel = require("../models/user.model");

const isValidRole = async (role = "") => {
  const isExistRole = await RoleModel.findOne({ name: role });

  if (!isExistRole) {
    throw new Error(`El Role ${role} no existe`);
  }
};

const isEmailExist = async (email = "") => {
  const isEmailRegistered = await UserModel.findOne({ email: email });
  if (isEmailRegistered) {
    throw new Error(`El email ${email} ya se encuentra registrado`);
  }
};

module.exports = {
  isValidRole,
  isEmailExist,
};
