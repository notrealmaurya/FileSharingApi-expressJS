const express = require('express');

const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

console.log("Hello world!");


const PORT = process.env.PORT || 5000



app.get("/", (req, res) => {

    res.send("File Sharing APi in expressJS");

});


app.listen(PORT, () => {
    console.log("Sever started on port " + PORT);
});
