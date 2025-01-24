const express = require("express");
const app = express();

app.get("/", (req,res,next) => {
    console.log("This is the first middle ware");
    next();
}, (req,res) => {
    res.send("Hello middlewares")
})

app.listen(3000, ()=>{
    console.log("tHE SERVER IS STARTED");
})

// When you open the browser and navigate to http://localhost:3000/, a GET request is sent to the server for the / route.
// The middleware console.log("This is the first middleware") is executed.
// Then, next() is called, passing control to the second handler (req, res) where res.send("Hello middlewares") sends the response to the browser.