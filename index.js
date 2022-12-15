const express = require("express");
const app = express();

app.use(express.static("./views"))
app.set("view engine" , "ejs")
app.get("/",(req,res)=>{
     res.render("register")
})

const port = 5000
app.listen(port,()=>{
     console.log("Your server Run PORT :5000");
})