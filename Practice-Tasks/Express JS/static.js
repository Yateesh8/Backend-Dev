const express = require("express");
const app = express();

// server files from 'public' directory
// Absolute path: C:\Users\yatee\gitHub\Backend-Dev\Practice-Tasks
// Relative path: ./public

// const path = __dirname + "./public";
// console.log("halelujah yashu..");

app.use(express.static("Express_JS/public"));
app.listen(8000, ()=>{
    console.log("Server started successfully..");
});
