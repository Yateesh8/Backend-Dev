const express = require("express");
const app = express();
app.use(express.json());

let credentials = [
    {"email":"yateesh@gmail.com", password:"123"},
    {"email":"yash@gmail.com", password:"456"}
];

app.get("/auth/users", (req, res)=>{
    res.json({ message:"User Fetched successfully..", credentials});
});

// reset password route
app.put("/auth/reset", (req, res) => {
    const {email,password,newPassword} = req.body;

    // find user
    const user = credentials.find(
        (cred)=> cred.email === email && cred.password === password)
    
        if(!user){
            return res.status(400).json({message: "Invalid email or password.."})
        }
        // update password
        user.password= newPassword;
        res.json({message:"Password updated successfully..", user});
   
});

// forgot password
app.put("/auth/forgotPassword",(req, res)=>{
    const {email, newPassword} = req.body;
    const user = credentials.find((cred) => cred.email === email);
    
    if(!user){
        return res.status(400).json({message:"Invalid email.."});
    }
    user.password = newPassword;
    res.json({message:"Password is reset sucessfully.."});
})

app.listen(8000, ()=> console.log("Server started successfully.."));
