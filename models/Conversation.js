const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema({
    users: {
        type: [String],
    },
    messages: {
        type: [],
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    modifiedOn: {
        type: Date,
        default: null,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("conversation", ConversationSchema);
