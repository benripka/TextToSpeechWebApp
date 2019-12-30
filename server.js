const fs = require("fs");
const express = require("express");

const app = express();
const port = 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (request, response) => {
    response.send("We got a connection!");
});

app.get("/article", (request, response) => {
    fs.readFile("./Content/notes.txt", (error, data) => {
        if(error) { 
            console.log("Error reading file"); 
            throw error;
        }
        response.send(data);
    });
});

app.listen(port, (error) => {
    if(error) {
        console.log("ERROR: ", error);
    }
    else {
        console.log("Listening on port ", port);
    }
});