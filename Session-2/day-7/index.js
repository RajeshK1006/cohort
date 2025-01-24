const express = require("express")

port = process.env.PORT;
console.log(port);

const app = express();


// app.use("/people", ourrouts);

app.get("/", (req,res) => {
    res.send("Hello this is an wecolme page of the api")
})

app.listen(3000, ()=> {
    console.log("Server is up and running.. in the port - 3000")
})