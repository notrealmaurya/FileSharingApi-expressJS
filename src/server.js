const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000


// Middleware setup
app.use(express.json());
app.set("views", path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(cors());



// Routes
app.use("/files", require("./routes/showRoute"));
app.use("/files/upload", require("./routes/filesRoute"));
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


module.export = app;