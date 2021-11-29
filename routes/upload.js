const express = require("express");
const path = require("path");
const router = express.Router();

const auth = require("../middleware/auth");

// Upload file
router.post("/", auth, (req, res) => {
    const files = req.files.files;
    const allowedExtensions = [".png", ".jpeg", ".jpg"];
    let error = [];

    if (!files) return res.status(400).json({ msg: "No files was uploaded!" });

    const paths = files.map((file, i) => {
        const extensionName = path.extname(file.name);

        if (!allowedExtensions.includes(extensionName)) {
            error = [...error, { index: i, message: "Extension not allowed" }];
        }

        if (allowedExtensions.includes(extensionName)) {
            file.mv(`./media/${file.name}`, (err) => {
                if (err) {
                    console.error(err);

                    return res.status(500).json({
                        error: err,
                        errorMessage: "There was a error loading the image.",
                    });
                }
            });
            console.log(file.name);
            return file.name;
        }
    });

    res.status(200).json({ files: paths, error });
});

module.exports = router;
