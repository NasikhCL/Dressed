import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const location = useLocation()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   useEffect(()=>{
//     let localUser = JSON.parse(sessionStorage.getItem("user"))
//     if(localUser){
//       navigate('/')
//     }

//   })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        // Signed in
        const user = userCredential.user;
        console.log(user);
        sessionStorage.setItem("user", JSON.stringify(user.uid));
        toast.success("Login Successfully");
        if (location.pathname.startsWith('/admin')) {
          // Do something for admin routes
          console.log('start with admin' , location)
          navigate("/admin/add-new-outfit");
        } else {
          // Do something for other routes
          console.log('start with user' , location)
          navigate('/')
        
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("wrong email or password!");
      });
    // Use email and password for authentication or other logic
    // console.log(Email: ${email}, Password: ${password});
  };

  return (
    <form className={location.pathname.startsWith('/admin') ? 'p-7 sm:p-14 bg-gray-300  rounded flex flex-col justify-start items-center' : 'p-7 sm:p-14 bg-cover bg-[url("https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] h-[100vh]  rounded flex flex-col justify-start items-center '}

      onSubmit={handleSubmit}
    >
      {
        location.pathname.startsWith('/user') && <h2 className="text-2xl text-white font-bold">Let's get dressed</h2>
      }
      <h1 className="text-2xl font-bold text-blue-700">{location.pathname.startsWith('/admin') ? 'Admin' : 'User'} Login</h1>
      <div className=" h-24 flex flex-col flex-wrap justify-evenly ">
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
        Login
      </button>
      {
        location.pathname.startsWith('/user') && <div className="">new user?<Link to='/user/signup' className="text-blue-600 cursor-pointer"> signup here</Link></div>
      }
    </form>
  );
}
