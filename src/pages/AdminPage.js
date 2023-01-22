import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import AddUser from "../components/AddUser";
import PrivateRoute from "../PrivateRoute";
import { Navbar } from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import F0F from "../components/F0F";

export default function AdminPage() {
  return (
    <div className=" h-screen bg-gray-300">
      <Navbar />

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/add-new-outfit"
          element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<F0F />} />
      </Routes>
      
    </div>
  );
}
