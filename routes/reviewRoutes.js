const express = require("express");
const reviewController = require("../controller/reviewController");
const { isAdmin, isOwned, isBuyer } = require("../middleware/auth");
const { validateToken } = require("../jwt/index");

const router = express.Router();
router.use(validateToken);

router.post("/",isAdmin, isBuyer, reviewController.addReview)
router.get("/", isAdmin, isOwned, isBuyer, reviewController.getAllReviews)
router.put("/:id", isAdmin, reviewController.updateReview)
router.delete("/:id", isAdmin, reviewController.deleteReview)

module.exports = router;