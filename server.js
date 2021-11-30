const express = require("express");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/db");

// Path module willl be used to create a valid absolute path for saving the uploaded file.
const path = require("path");

const app = express();

// Connect to DB
connectDB();

// Init fileupload
app.use(fileUpload());

// Init Middleware
app.use(express.json({ extended: false }));

// Register routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/upload", require("./routes/upload"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/src/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
