const express = require("express");
const path = require("path");
const router = express.Router();

const auth = require("../middleware/auth");

// Upload file
router.post("/", (req, res) => {
    let files = req.files?.files;
    if (!files.length) files = [files];
    const allowedExtensions = [".png", ".jpeg", ".jpg"];
    let error = [];

    if (!files)
        return res
            .status(400)
            .send({ message: "No files were sent to server!" });

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
                        errorMessage: "There was a error uploading the image.",
                    });
                }
            });

            return `./media/${file.name}`;
        }
    });

    res.status(200).json({ files: paths, error: error });
});

module.exports = router;
