const Pharmacy = require("../models/pharmacy");

const getPharmacies = async (req, res) => {
  try {
    const { medicineId } = req.query;
    const pharmacies = await Pharmacy.find({ "medicines.medicineId": medicineId }).select("name address medicines");
    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getPharmacies};
