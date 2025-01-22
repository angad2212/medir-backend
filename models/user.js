const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    favourites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Medicine'}]
    //this will store the id's of the medicines only
    //referencing the favaourite medicines' id's from the 'medicine' collection
});

module.exports = mongoose.model("User", userSchema);