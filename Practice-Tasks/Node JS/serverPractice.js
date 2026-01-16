const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("Hello Yateesh, server started successfully");
});

myServer.listen(8000, () => {
  console.log("Server is running");
});
