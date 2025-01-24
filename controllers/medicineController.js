const Medicine = require('../models/medicine');

const getMedicines = async (req, res)=>{
    try {
        const medicines = await Medicine.find({name: new RegExp(req.query.name, "i")});
        res.json(medicines);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMedicineById = async (req, res)=>{
    try {
        const medicine = await Medicine.findById(req.params.id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {getMedicineById, getMedicines}