const express = require('express');

const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const path = require('path')

const PORT = process.env.PORT || 5000

app.set("views", path.join(__dirname, 'view'));


app.set('view engine', 'ejs')

app.use(express.json());

app.use("/api/files", require("./routes/filesRoute"));

app.use("/files", require("./routes/showRoute"));

app.use("/files/download", require("./routes/downloadRoute"));

app.get("/", (req, res) => {

    res.send("File Sharing APi in expressJS");

});


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Sever started on port " + PORT);
        });
    }).catch((error) => {
        console.log(error);
    });
