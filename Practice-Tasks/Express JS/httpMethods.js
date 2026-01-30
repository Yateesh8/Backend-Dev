const express = require("express");
const app = express();

app.get("/",(req, res)=>{
  res.send("Home page..");
});

app.get("/about", (req, res) => {
  res.send("About page" + " Hey " + req.query.name + " you are "+ req.query.age);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is started..");
});