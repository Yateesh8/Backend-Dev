// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   console.log("Middleware 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware 2");
//   next();
// });

// app.get("/test", (req, res) => {
//   res.send("Route executed..");
// });

// app.listen(8000, () => {
//   console.log("Server started successfully..");
// });

// Application-level middleware
const express = require("express");
const app = express();

//Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request url: ", req.url);
  console.log("Request method: ", req.method);
  next(); //next middleware can access route
});

app.get("/home", (req, res) => {
  res.send("Welcome Home Yateesh..");
});

// Router-level middleware
const checkLogin = (req, res, next) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).send("Please login first..");
  }
  next();
};

app.get("/dashboard", checkLogin, (req, res) => {
  res.send("Welcome to Dashboard Yateesh..");
});

// Authentication Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(402).json({ messsage: "Please provide token.." });
  }
  if (token != "yashu") {
    return res.status(403).json({ messsage: "invalid token.." });
  }
  next();
};

app.get("/profile", authMiddleware, (req, res) => {
  res.json({ messsage: "Profile data" });
});

// Error-handling middleware
app.get("/error", (req, res)=>{
    throw new Error("Something went wrong..");
});

app.use((err, req, res, next)=>{
    console.log("Error middleware: ", err.messsage);
    res.status(500).json({message:"Internal server error.."});
});

// Server port
app.listen(8000, () => {
  console.log("Server started successfully..");
});
