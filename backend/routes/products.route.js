const { Router } = require("express");
const {
  getAll,
  store,
  update,
  remove,
  getById,
} = require("../controllers/product.controller");

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", store);
router.put("/:id", update);
router.delete("/", remove);

module.exports = router;
