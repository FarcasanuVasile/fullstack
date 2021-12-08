const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    conversation: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    sent: {
        type: Date,
        default: Date.now,
    },
    delivered: {
        type: Date,
        default: null,
    },
});

module.exports = mongoose.model("message", MessageSchema);
