const express = require("express");
const { getMedicines, getMedicineById } = require("../controllers/medicineController");
const router = express.Router();

router.get("/", getMedicines);
router.get("/:id", getMedicineById);

module.exports = router;
