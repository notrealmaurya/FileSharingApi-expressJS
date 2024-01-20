const multer = require("multer");
const { v4: uuidv4 } = require("uuid");  // Correct import
const filesRouter = require("express").Router();
const File = require("../models/fileModel");
const path = require('path');
const { format } = require("date-fns");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 * 100 } // 100 MB in bytes
}).single('myfile');

filesRouter.post('/', async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                if (err.code === "LIMIT_FILE_SIZE") {
                    return res.status(400).json({ error: "File should be less than 100 MB" });
                }
                return res.status(500).json({ error: err.message });
            }

            if (!req.file) {
                return res.json({ error: "Please upload a file to continue" });
            }

            const file = new File({
                filename: req.file.filename,
                path: req.file.path,
                size: req.file.size,
                uuid: uuidv4()
            });

            const response = await file.save();

            return res.json({ file: `${process.env.APP_BASE_URL}/filesRoute/${response.uuid}` });
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


filesRouter.post('/send',async (req,res)=>{
    const {uuid,emailTo,emailFrom}= req.body

    if(!uuid || !emailTo || !emailFrom){
        return res.status(422).send({error: "All fields are required"});

    }

    const file = await File.findOne({uuid: uuid});

    if(file.sender){
        return res.status(403).send({error:"This email has already been sent
    }
    

    file.sender = emailFrom;
    file.receiver=emailTo
    


});


module.exports = filesRouter;
