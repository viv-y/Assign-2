import React,{useState} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate();

    const[user,setUSer]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = (e) => {
        const{name,value} = e.target
        setUSer({
            ...user,[name]:value
        })
    }

    const registerbutton = () => {
        const{name,email,password,reEnterPassword} = user
        if(name&&email&&password&&(password===reEnterPassword)){
            
            axios.post("http://localhost:8000/register",user)
            .then(res => {alert(res.data.message)
            navigate("/login")
            })

        }else{
            alert("Invalid Credential")
        }
    }

    return (
        <div style={{textAlign:"center"}}>
            {console.log("User",user)}
            <h1>Registration Page</h1>
            <input type='text' name='name' value={user.name} placeholder='Enter Your Name' onChange={handleChange}/><br/>
            <input type='email' name='email' value={user.email} placeholder='Enter your Email ID' onChange={handleChange}/><br/>
            <input type='password' name='password' value={user.password} placeholder='Enter your Password' onChange={handleChange}/><br/>
            <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter your Password' onChange={handleChange}/><br/>

            <button onClick={registerbutton}>Register</button>
            <button><Link to="/login">Login</Link></button>
        </div>
    )
}

export default Register;