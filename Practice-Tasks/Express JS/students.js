const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is Home Page..");
});

app.get("/about", (req, res) => {
  const name = req.query.name;
  const present = req.query.present;
  if (present === "no") {
    res.end(`${name} +" is absent"`);
  } else {
    res.send(`${name} +" is present"`);
  }
});

app.listen(8000, () => {
  console.log("Server started successfully..");
});

const students = [
  { name: "Yateesh", id: 1, branch: "CSE" },
  { name: "Anubhav", id: 2, branch: "CSE" },
  { name: "Aryan", id: 3, branch: "CSE" },
];

app.post("/students/add", async (req, res) => {
  const data = req.body;
  students.push({ name: data.name, id: data.id, branch: data.branch });
 // students.push(data);
  res.send(students);
});

