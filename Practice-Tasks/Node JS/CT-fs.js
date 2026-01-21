const fs = require("fs");

fs.writeFile("./demo.txt", "This is the sample data for demo.txt\n", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});

fs.readFile("./demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Task completed successfully");
  }
});

fs.appendFile("./demo.txt", "This data is for append operation \n Hello Yateesh", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Task completed successfully");
  }
});

fs.copyFile("./demo.txt", "./copy_of_demo.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Copy created successfully");
  }
});

fs.unlink("./demo.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File removed successfully");
  }
});

fs.readdir("./", (err, files) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Files in directory:");
    console.log(files);
  }
});

