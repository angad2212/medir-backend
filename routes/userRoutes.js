const express = require('express');
const {signup, login, getFavourites, addFavourite, removeFavourite} = require(
    "../controllers/userController"
)
const auth = require("../middleware/auth");
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/favourites', auth, getFavourites);
router.post("/favourites", auth, addFavourite);
router.delete("/favourites/:id", auth, removeFavourite);

module.exports = router;