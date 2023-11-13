const express = require("express");
const reviewController = require("../controller/reviewController");
const { validateToken } = require("../jwt/index");

const router = express.Router();
router.use(validateToken);

router.post("/review", reviewController.addReview)
router.get("/review", reviewController.getAllReviews)
router.put("/review/:id", reviewController.updateReview)
router.delete("/review/:id", reviewController.deleteReview)

module.exports = router;