const downloadRouter = require("express").Router();
const File = require("../models/fileModel");


downloadRouter.get("/:uuid", async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });

        if (!file) {
            return res.render('download', { error: "Link has been Expired" });
        }

        const filePath = `${__dirname}/../../${file.path}`;

        res.download(filePath);

    } catch (error) {
        console.error(error);
        return res.render('download', { error: "Something went wrong" });
    }
});

module.exports = downloadRouter;
