const fs= require("fs");
const os= require("os");
console.log(os.cpus().length);
// fs.writeFileSync("./example.txt", "Hello World!");
// const result= fs.readFileSync("./unknown.txt", "utf-8");
// console.log(result);

    // Blocking / Synchronous Code
    // console.log("1");
    // const result= fs.readFileSync("./unknown.txt", "utf-8");
    // console.log(result);
    // console.log("2");  
    // Non-Blocking / Asynchronous Code
    // console.log("1");
    // fs.readFile("./unknown.txt", "utf-8", (err, result)=> {
    //     console.log(result);

    // });
    // console.log("2");

// fs.readFile("./unknown.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("Error reading files:" , err);
//     }else{
//         console.log("File content:" , result);
//     }
// });
// fs.appendFile("./unknown.txt", `${Date.now()} Hey there\n`);
// fs.cpSync("./unknown.txt", "./copy_of_unknown.txt");
// fs.unlinkSync("./copy_of_unknown.txt");
// console.log(fs.statSync("./unknown.txt").isFile());
// fs.mkdirSync("./my-docs/a/b", {recursive: true});