const express = require("express");
const router = express.Router();
const financeController = require("../controllers/financeController");
const authMiddleware = require("../../middlewares/auth"); 

router.post("/transaction", authMiddleware, financeController.createTransaction);
router.post("/goal", authMiddleware, financeController.createGoal);
router.get("/dashboard", authMiddleware, financeController.getDashboard);

module.exports = router;