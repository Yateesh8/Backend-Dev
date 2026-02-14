const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

// register page
app.get("/auth/register", (req, res) => {
  res.send(`
    <form action="/auth/register" method="post">
      <input type="text" name="name" placeholder="Name" required /><br>
      <input type="email" name="email" placeholder="Email" required /><br>
      <input type="password" name="password" placeholder="Password" required /><br>
      <button type="submit">Register</button>
    </form>
  `);
});

// register api
app.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return res.send("User already exists with this email");
  }

  // regex matching for password validation
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  if (!strongPassword.test(password))
    return res.send("Password must contain both uppercase and lowercase letters.",);

  users.push({ name, email, password });
  res.send("Registration successful");
});

// login api
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const userExist = users.find((user) => user.email === email);
  if (!userExist) {
    return res.send("No user found");
  }

  if (userExist.password !== password) {
    return res.send("Invalid password");
  }

  res.send("Login successfully");
});

// server
app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});

