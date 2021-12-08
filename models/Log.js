const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: false,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("log", LogSchema);
