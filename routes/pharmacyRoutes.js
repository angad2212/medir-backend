const express = require("express");
const { getPharmacies } = require("../controllers/pharmacyController");
const router = express.Router();

router.get("/", getPharmacies);

module.exports = router;