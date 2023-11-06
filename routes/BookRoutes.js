const express = require("express");
const bookController = require("../controller/bookController");
// const { isAdmin, isOwned, isBuyer } = require("../middleware/auth");
// const { validateToken } = require("../jwt/index");

const router = express.Router();
// router.use(validateToken);

router.post("/", bookController.addBook);
router.get("/", bookController.getAllBook);
router.get("/:id", bookController.getOneBook);
router.put("/:id", bookController.updateBook)
router.delete("/:id", bookController.deleteBook)

module.exports = router;