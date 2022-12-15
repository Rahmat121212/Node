const express = require("express");
const app = express();

app.get("/",(req,res)=>{
     res.send("Well come")
})


const port = 5000
app.listen(port,()=>{
     console.log("Your server Run PORT :5000");
})