const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const auth = require("../middleware/auth");

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find().sort({ date: -1 });
        res.status(200).send(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            message: "An error ocurred while loading the users!",
        });
    }
});

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

// Edit user
router.put("/:id", auth, async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        avatarPath,
        isActive,
        type,
    } = req.body;

    const userFields = {};
    userFields.modifiedOn = Date.now();
    if (firstName) userFields.firstName = firstName;
    if (lastName) userFields.lastName = lastName;
    if (type) userFields.type = type;
    if (avatarPath) userFields.avatarPath = avatarPath;
    if (isActive) userFields.isActive = isActive;
    if (email) {
        const user = await User.findOne({ email: email });
        if (user && user.id != req.params.id)
            return res.status(400).json({ message: "Email is in use!" });
        userFields.email = email;
    }
    if (username) {
        const user = await User.findOne({ username: username });
        if (user && user.id != req.params.id)
            return res
                .status(400)
                .json({ message: "Username is already in use!" });
        userFields.username = username;
    }
    if (password) {
        const salt = await bcrypt.genSalt(10);
        userFields.password = await bcrypt.hash(password, salt);
    }

    try {
        const userToModify = await User.findById(req.params.id);
        if (!userToModify)
            return res
                .status(404)
                .send({ message: "User not found in our database." });
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: userFields },
            { new: true }
        );
        return res
            .status(200)
            .send({ message: "User modified succefully!", user: user });
    } catch (error) {
        console.error(error.message);
        return res
            .status(500)
            .send({ message: "Some error ocurred while modifing the user." });
    }
});

// Delete user

router.delete("/:id", auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send({ message: "User not found!" });
        await User.findByIdAndRemove(req.params.id);
        return res.status(200).send({ message: "User deleted succefully!" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({
            error: error,
            message: "A error ocurred on the server while deleting the user.",
        });
    }
});

module.exports = router;
