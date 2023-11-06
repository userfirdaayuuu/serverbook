const express = require("express");
const authorController = require("../controller/authorController");
const { isAdmin, isOwned, isBuyer } = require("../middleware/auth");
const { validateToken } = require("../jwt/index");

const router = express.Router();
router.use(validateToken);

router.post("/", isAdmin, isBuyer, authorController.addAuthor);
router.get("/", isAdmin, isOwned, isBuyer, authorController.getAllAuthor);
router.get("/:id", isAdmin, isOwned, isBuyer, authorController.getOneAuthor);
router.put("/:id", isAdmin, authorController.updateAuthor);
router.delete("/:id", isAdmin, authorController.deleteAuthor);

module.exports = router;