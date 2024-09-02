import React, { useEffect } from 'react'
import {useState} from 'react'
// import axios from "axios";
import {useNavigate} from 'react-router-dom';
function Signup() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  },)

  const collectData =async() =>{
    console.warn(name,email,password);
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body: JSON.stringify({name,email,password}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result=await result.json()
    console.warn(result);
    if(result){
      navigate('/')
    }
    localStorage.setItem("user",JSON.stringify(result.result))
    localStorage.setItem("token ",JSON.stringify(result.auth))
  }

  //   const collectData= async()=>{
  //   const bookingData = {
  //     name: name,
  //     email: email,
  //     password:password,
  //   };
  //   console.log(bookingData);
  //   let result=await
  //   axios
  //     .post("http://localhost:5000/register", bookingData)
  //     .then((res) => {
  //       console.log(res.data);
  //       setName(name);
  //       setEmail(email);
  //       setPassword(password);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     if (result){
  //       navigate('/Products')
  //     }
  // };

  
    
  return (
    <div className='register'>
        <h1>
            Register
        </h1>
        <input className='InputBox' type='text' 
        value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
        
        <input className='InputBox'type='email'
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        
        <input className='InputBox'type='Password'
        value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        <button className="appButton" onClick={collectData} type='button'>Signup</button>


    </div>
  )
}
export default Signup