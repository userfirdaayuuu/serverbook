const express = require("express");
const bookController = require("../controller/bookController");
// const { isAdmin, isOwned, isBuyer } = require("../middleware/auth");
// const { validateToken } = require("../jwt/index");

const router = express.Router();
// router.use(validateToken);

router.post("/book", bookController.addBook);
router.get("/book", bookController.getAllBook);
router.get("/book/:id", bookController.getOneBook);
router.put("/book/:id", bookController.updateBook)
router.delete("/book/:id", bookController.deleteBook)

module.exports = router;