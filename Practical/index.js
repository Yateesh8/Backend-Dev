const express = require("express");
const app = express();

app.use(express.json());

let students = [];
let nextId = 1;

app.post("/students", (req, res) => {
  const { name, marks } = req.body;

  if ( typeof name !== "string" || name.trim() === "" || typeof marks !== "number" || marks < 0 ) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const newStudent = {
    id: nextId++,
    name: name.trim(),
    marks,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, marks } = req.body;

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ message: "Invalid name" });
    }
    student.name = name.trim();
  }

  if (marks !== undefined) {
    if (typeof marks !== "number" || marks < 0) {
      return res.status(400).json({ message: "Invalid marks" });
    }
    student.marks = marks;
  }

  res.status(200).json(student);
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.status(200).json({ message: "Student deleted" });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server started successfully");
});
