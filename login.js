import React,{useState} from 'react';
import axios from 'axios';

import { useNavigate,Link } from 'react-router-dom';

const Login = ({setLoginUser}) => {
    const navigate=useNavigate();
    const[user,setUser]=useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        const{name,value} = e.target
        setUser({
            ...user,[name]:value
        })
    }

    const loginbutton = async () => {
        axios.post("http://localhost:8000/login",user)
        .then(res=>
            {
            if(res.data.message==="Login Successfull"){
            localStorage.setItem('name',res.data.name)
            alert(res.data.message);
            setLoginUser(true);
            navigate("/")
        }else{
            navigate("/register")
        }       
        })
    }

    return (
        <div style={{textAlign:"center"}}>
            {console.log("USer",user)}
            <h1>Login</h1>
            <input type="email" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange}/><br/>
            <input type="password" name='password' value={user.password} placeholder='Password' onChange={handleChange}/>
            <br/>
            <button onClick={loginbutton}>Login</button>
            <button><Link to="/register">Register</Link></button>
        </div>
    )

}

export default Login;