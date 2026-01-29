const http = require("http");
const fs = require("fs");

let students = [];

http.createServer((req, res) => {
    // log every request
    fs.appendFileSync("log.txt", `${req.method} ${req.url}\n`);

    const id = req.url.split("/")[2];

    // GET all students
    if (req.method === "GET" && req.url === "/students") {
      return res.end(JSON.stringify(students));
    }

    // GET student by id
    if (req.method === "GET" && id && req.url.startsWith("/students/")) {
      return res.end(JSON.stringify(students.find((s) => s.id == id)));
    }

    // POST new student
    if (req.method === "POST" && req.url === "/students") {
      let body = "";
      req.on("data", (c) => (body += c));
      req.on("end", () => {
        students.push(JSON.parse(body));
        res.end("Student Added");
      });
      return;
    }

    // DELETE student by id
    if (req.method === "DELETE" && id && req.url.startsWith("/students/")) {
      students = students.filter((s) => s.id != id);
      return res.end("Student Deleted");
    }

    // 404
    res.statusCode = 404;
    res.end("404 Not Found");
  })
  .listen(3000, () => console.log("Server running on 3000"));
