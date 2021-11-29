const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    modifiedOn: {
        type: Date,
        default: null,
    },
    avatarPath: {
        type: String,
        default: null,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        default: "User",
    },
});

module.exports = mongoose.model("user", UserSchema);
