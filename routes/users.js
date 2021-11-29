const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// Register - Add user to db

router.post(
    "/",
    [
        check("firstName", "Plase enter a valid name").isLength({ min: 2 }),
        check("lastName", "Please enter a valid last name").isLength({
            min: 2,
        }),
        check("username", "Please enter a valid username").isLength({ min: 6 }),
        check("email", "Please enter a valid email address.").isEmail(),
        check(
            "password",
            "Please enter a password with 8 or more characters."
        ).isLength({ min: 8 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).send({ errors });
        const { firstName, lastName, email, username, password, avatarPath } =
            req.body;

        try {
            let user = await User.findOne({ email });

            if (user)
                return res
                    .status(400)
                    .send({ message: "Email is already used!" });

            user = (await User.findOne({ username })) || null;

            if (user)
                return res
                    .status(400)
                    .send({ message: "Username is already used" });
            user = new User({
                firstName,
                lastName,
                email,
                username,
                avatarPath,
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 1800 },
                (err, token) => {
                    if (err) throw err;
                    res.send({ token });
                }
            );
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Error on server while saving the user!");
        }
    }
);

module.exports = router;
