const User = require('../models/user');
const Medicine = require('../models/medicine');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req, res)=>{
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            res.status(400).json({
                message: 'Please fill out all the fields'
            })
        }

        //hashing password
        const hashedPassword = await bcrypt.hash(password, 10); //10 iterations of salting

        //create user and save hashed password
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "User created successfully"
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        //check if user exists or not
        const user = await User.findOne({email});

        //if user does not exist or incorrect password:
        if(!user || !bcrypt.compare(password, user.password)){
            res.status(401).json({
                message: 'Invalid credentials'
            })
        }

        //create the token for the user
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({token})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFavourites = async(req, res)=>{
    try {
        //user identified through the token
        const user = await User.findById(req.user.id).populate("favourites");
        //return the favaourites
        res.json(user.favourites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addFavourite = async(req, res)=>{
    try {
        const {medicineId} = req.body;
        //get user from the token
        const user = await User.findById(req.user.id);
        user.favourites.push(medicineId);
        await user.save();
        res.json({
            message: "Added to favourites"
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeFavourite = async(req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(req.user.id);
        user.favourites.pull(id);
        await user.save();
        res.json({
            message: "Removed from favaourites"
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {signup, login, getFavourites, addFavourite, removeFavourite}