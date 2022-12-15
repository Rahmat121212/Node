const express = require("express");
const app = express();

app.use(express.static("./views"))
app.set("view engine" , "ejs")
app.get("/",(req,res)=>{
     const data =[{name:"Baheer",age:"20"},
                         {name:"Asalam",age:"60"},
                         {name:"Rahmat",age:"30"},]
     res.render("register",{data})
})

const port = 5000
app.listen(port,()=>{
     console.log("Your server Run PORT :5000");
})