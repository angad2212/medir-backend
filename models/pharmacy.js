const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String},
    medicines: [{
        medicineId: {type: mongoose.Schema.Types.ObjectId, ref: 'Medicine'},
        price: {type: Number}
    }]
});

module.exports = mongoose.model("Pharmacy", pharmacySchema);