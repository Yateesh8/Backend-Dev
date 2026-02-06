const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Aman", marks: 60, city: "Hyderabad", status: true },
  { id: 2, name: "Naman", marks: 70, city: "Shahbad", status: false },
];

// view students
app.get("/students", (req, res) => {
  res.json(students);
});

// patch - update any one field (marks or city)
app.patch("/students/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const student = students.find((st) => st.id == id);
  if (!student) {
    return res.status(400).json({ Message: "Student not found.." });
  }
  // partially update the data
  Object.assign(student, update);
  res.json({ Message: "Student data updated successfully..", student });
});

// view status (active/inactive)
app.get("/students/:id/status", (req, res) => {
  const id = req.params.id;
  const student = students.find((st) => {
    return st.id == id;
  });
  if (!student) {
    return res.status(400).json({ Message: "Student not found.." });
  }
  return res.json({ status: student.status });
});

// student status
app.patch("/students/:id/status", (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const student = students.find((st) => {
    return st.id == id;
  });

  if (!student) {
    return res.status(400).json({ Message: "Student not found.." });
  }
  // update status
  student.status = status;
  return res.json({ student });
});

app.listen(8000, () => {
  console.log("Server started successfully..");
});
