const express = require('express');
const router = express.Router();
const {getMedicines, getMedicineById} = require('../controllers/userController');

router.get('/', getMedicines);
router.get('/', getMedicineById);

module.exports = router;