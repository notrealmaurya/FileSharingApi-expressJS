const showRouter = require("express").Router();
const { render } = require("ejs");
const File = require("../models/fileModel");
const dotenv = require("dotenv").config();

showRouter.get("/:uuid", async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });

        if (!file) {
            return res.render('download', {
                error: "File not found"
            });
        }
        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });


    } catch (error) {
        console.error(error);
        return res.render('downloadLink', { error: "Something went wrong" });
    }
});

module.exports = showRouter;
