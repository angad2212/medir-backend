const express = reuqire('express');
const {signup, login, getFavourites, addFavourite, removeFavourite} = require(
    "../controllers/userController"
)
const auth = require("../middleware/auth");
const router = express.Router();

router.post('/signup', signup);
router.post('login', login);
router.get('favourites', auth, getFavourites);
router.post("/favorites", auth, addFavourite);
router.delete("/favorites/:id", auth, removeFavourite);

module.exports = router;