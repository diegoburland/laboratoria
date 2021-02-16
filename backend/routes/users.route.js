const { Router } = require("express");
const {
  getUsers,
  storeUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { check } = require("express-validator");
const fieldValidate = require("../middlewares/field-validate");
const { isValidRole, isEmailExist } = require("../helpers/db-validators");
const router = Router();

router.get("/", getUsers);
router.post(
  "/",
  [
    check("name", "El nombre es requerido").not().isEmpty(),
    check("password", "La contraseña es requerida").not().isEmpty(),
    check("email", "debe ingresar una dirección de correco válida").isEmail(),
    check("role").custom(isValidRole),
    check("email").custom(isEmailExist),
    fieldValidate,
  ],
  storeUser
);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
