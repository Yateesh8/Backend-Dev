const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Yateesh", marks: 99, city: "Rampur" },
  { id: 2, name: "Yash", marks: 89, city: "Mathura" },
  { id: 3, name: "Yashu", marks: 90, city: "Vrindavan" },
];

// view students
app.get("/students", (req, res) => {
  return res.json({ Message: "Student details:", students });
});

// delete - remove student by id
app.delete("/students/:id/remove", (req, res) => {
  const id = req.params.id;
  const index = students.findIndex((s) => s.id == id);
  if (index === -1) {
    return res.status(400).json({ Message: "Student not found.." });
  }

  const deleteStudent = students.splice(index, 1);
  res.json({
    Message: "Student deleted successfully..",
    deleteStudent: deleteStudent[0],
  });
});

app.listen(8000, () => {
  console.log("Server started successfully..");
});
