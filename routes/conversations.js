const express = require("express");
const router = express.Router();

const Conversation = require("../models/Conversation");
const auth = require("../middleware/auth");

// Get conversations
router.get("/", auth, async (req, res) => {
    try {
        const conversations = await Conversation.find().sort({ date: -1 });
        return res.status(200).send({ conversations: conversations });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:
                "There was an error while getting the conversations form the server!",
        });
    }
});

// Create new conversation
router.post("/", async (req, res) => {
    const { messages, users } = req.body;
    try {
        const conversation = new Conversation({ users, messages });
        await conversation.save();
        res.status(200).send({
            message: "The conversation was created sucefully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was an error while sending the message!",
        });
    }
});

router.put("/:id", async (req, res) => {
    const { modifiedOn, users, messages, isDeleted } = req.body;
    const newConversation = {};
    if (users) newConversation.users = users;
    if (messages) newConversation.messages = messages;
    if (isDeleted) newConversation.isDeleted = isDeleted;
    if (modifiedOn) newConversation.modifiedOn = modifiedOn;

    try {
        let conversation = await Conversation.findById(req.params.id);
        if (!conversation)
            return res
                .status(404)
                .send({ message: "Conversation to update was not found!" });
        conversation = await Conversation.findByIdAndUpdate(
            req.params.id,
            { $set: newConversation },
            { new: true }
        );
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "There was an error while updating the conversation!",
        });
    }
});

module.exports = router;
