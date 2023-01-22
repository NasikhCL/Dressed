import React, { useState } from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
 

    
export default function SignUp() {

    // const location = useLocation()
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [name, setName]  = useState('')
    const [password, setPassword] = useState('');

 
    const handleSubmit = async (e) => {
      e.preventDefault()
     if(!email || !name || !password){
        toast.error('fill all the form fields')
        return;
     }
     if(password.length < 6){
        toast.error('password should contain atleast 6 characters')
        return;
     }
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            sessionStorage.setItem("user", JSON.stringify(user.uid));
            console.log(user); 
            toast.success("SignUp Successfull");
            console.log(user);
            setEmail('')
            setName('')
            setPassword('')
            navigate("/user/login")
            // ...
        })
        .catch((error) => {
            toast.error('some internal error')
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }

    
      return (
        <form className='p-7 sm:p-14 bg-cover bg-[url("https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-[100vh] rounded flex flex-col justify-start items-center'
    
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl text-white font-bold">Let's get dressed</h2>
          <h1 className="text-2xl font-bold text-blue-700">User SignUp</h1>
          <div className=" h-24 flex flex-col flex-wrap justify-evenly ">
          <input
              className="outline-none rounded pl-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              required
            />
            <input
              className="outline-none rounded pl-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
            <input
              className="outline-none rounded pl-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
          </div>
    
          <button className="  px-4 py-1 bg-blue-900 hover:bg-blue-800 text-white rounded-xl">
            SignUp
          </button>
          
          <div className="text-white lg:text-black">Already have account ?<Link to='/user/login' className="text-blue-500 cursor-pointer"> Login here</Link></div>
          
        </form>
      );
    }
     