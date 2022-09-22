const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const connectDB=require("./databaseconnect");


const app=express();

connectDB();
app.use(express.json())
app.use(cors())

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User= new mongoose.model("User",userSchema)


app.post("/login",(req,res)=>{
    const{email, password} = req.body
    User.findOne({email:email}, (err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfull",name:user.name})
            }else{
                res.send({message:"Incorrect Password"})
            }
        }else{
            res.send({message:"User not Registered"})
        }
    })
})


app.post("/register",(req,res)=> {
    const {name,email,password}=req.body
    User.findOne({email:email}, (err,user)=>{
        if(user){
            res.send({message:"User already Registered"})
        }else{
            const user=new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                } else{
                    res.send({message:"Succesfully Registered"})
                }
            })
        }
    })
    
})


const PORT=8000;

app.listen(PORT,console.log(`server started on ${PORT}`));
