const express = require("express");
const app = express();

app.get("/",(req,res)=>{
     res.send("Well come")
})
app.get("/home",(req,res)=>{
     res.send("Well Home")
})


const port = 5000
app.listen(port,()=>{
     console.log("Your server Run PORT :5000");
})