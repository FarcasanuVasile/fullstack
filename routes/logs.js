const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

// Get all logs
router.get("/", async (req, res) => {
    try {
        const logs = await Log.find().sort({ date: -1 });
        res.status(200).send({ logs: logs });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was an error while loading the logs",
        });
    }
});

router.post("/", async (req, res) => {
    const { user, message } = req.body;
    try {
        const log = new Log({ user, message });
        await log.save();
        res.status(200).send({ message: "Logged sucefully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was an error while loggin this action!",
        });
    }
});

module.exports = router;
