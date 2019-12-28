const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("We got a connection!");
});

app.get("/artical", (req, res) => {
    response.send("Yolo");
});

app.listen(port, (error) => {
    if(error) {
        console.log("ERROR: ", error);
    }

    else {
        console.log("Listening on port ", port);
    }
});