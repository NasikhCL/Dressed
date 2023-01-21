import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("adminUser", JSON.stringify(user.uid));
        console.log(user);
        toast.success("Login Successfully");
        navigate("/admin/add-new-outfit");
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
    <form
      className="p-7 sm:p-14 bg-gray-300  rounded flex flex-col justify-start items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold text-blue-700">Admin Login</h1>
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
    </form>
  );
}
