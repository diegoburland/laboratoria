const { Router } = require("express");
const {
  getUsers,
  storeUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = Router();

router.get("/", getUsers);
router.post("/", storeUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
