const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");

// Login - Get logged in user from db

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            message: "An error occured while login process.",
        });
    }
});

// Login - Log user and get token
router.post("/", async (req, res) => {
    const { username, email, password } = req.body;
    let user;
    if (username) user = await User.findOne({ username: username });
    if (email) user = await User.findOne({ email: email });

    if (!user) return res.status(400).send({ message: "Invalid credentials." });
    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
        return res.status(400).send({ message: "Invalid credentials." });

    const payload = {
        user: {
            id: user.id,
        },
    };
    jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
            if (err) throw err;
            res.status(200).send({ token });
        }
    );
});

module.exports = router;
