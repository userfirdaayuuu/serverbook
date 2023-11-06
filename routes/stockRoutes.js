const express = require("express");
const stockController = require("../controller/stockController");
const { isAdmin, isOwned, isBuyer } = require("../middleware/auth");
const { validateToken } = require("../jwt/index");

const router = express.Router();
router.use(validateToken);

router.post("/", isAdmin, isBuyer, stockController.addStock);
router.get("/", isAdmin, isOwned, isBuyer, stockController.getAllStock);
router.get("/:id", isAdmin, isOwned, isBuyer, stockController.getOneStock);
router.put("/:id", isAdmin, stockController.updateStock);
router.delete("/:id", isAdmin, stockController.deleteStock);

module.exports = router;