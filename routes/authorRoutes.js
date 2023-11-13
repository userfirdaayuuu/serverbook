const express = require("express");
const authorController = require("../controller/authorController");
const { validateToken } = require("../jwt/index");

const router = express.Router();
router.use(validateToken);

router.post("/author", authorController.addAuthor);
router.get("/author", authorController.getAllAuthor);
router.get("/author/:id", authorController.getOneAuthor);
router.put("/author/:id", authorController.updateAuthor);
router.delete("/author/:id", authorController.deleteAuthor);

module.exports = router;