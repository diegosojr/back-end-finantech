const express = require("express");
const router = express.Router();
const financeController = require("../controllers/financeController");
const auth = require("../middlewares/auth"); 

router.post("/transaction", auth, financeController.createTransaction);
router.post("/goal", auth, financeController.createGoal);
router.get("/dashboard", auth, financeController.getDashboard);

module.exports = router;