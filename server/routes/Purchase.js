const express = require("express");
const PurchaseService = require("../services/PurchaseService");
const router = express.Router();

// Defining methods
router.post("/", PurchaseService.addPurchase);

router.get("/", PurchaseService.getAllPurchase);

module.exports = router;
