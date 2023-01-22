import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import F0F from "./components/F0F";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminPage from "./pages/AdminPage";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import UsersList from "./pages/UsersList";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route
          excat
          path="/category/:gender/:categoryName"
          element={<PrivateRoute><UsersList /></PrivateRoute>}
        />
        <Route
          exact 
          path="/searchResults/:searchQuery"
          element={<PrivateRoute><SearchResult /></PrivateRoute>}
        />
        <Route exact path="/favourites" element={<PrivateRoute><Favourites /></PrivateRoute>} />
        <Route exact path="/admin/*" element={<AdminPage />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="*" element={<F0F />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
 