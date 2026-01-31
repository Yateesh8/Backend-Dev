const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("This is Home Page..");
});

app.get("/about",(req,res)=>{
    if(req.query.present === "no"){
        res.end(req.query.name +" is absent");
    } else {
        res.send(req.query.name +" is present");
    }
});

app.listen(8000,()=>{
    console.log("Server started successfully..");
});