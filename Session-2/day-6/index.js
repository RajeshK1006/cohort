const express = require("express");
const app = express();

app.get("/",(req,res)=> {
    res.send("Hello rajesh")
})

app.get("/1",(req,res)=> {
    res.send("Hello rajesh")
})
app.get("/2",(req,res)=> {
    res.send("Hello rajesh")
})
app.get("/3",(req,res)=> {
    res.send("Hello rajesh")
})
app.get("/4",(req,res)=> {
    res.send("Hello rajesh")
})
app.listen(3000, ()=>{
    console.log("The express app is listening to the 3000 port");
}) 