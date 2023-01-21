import React from "react";
import { Route, Routes } from "react-router-dom";
import F0F from "./components/F0F";
import AdminPage from "./pages/AdminPage";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import UsersList from "./pages/UsersList";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          excat
          path="/category/:gender/:categoryName"
          element={<UsersList />}
        />
        <Route
          exact
          path="/searchResults/:searchQuery"
          element={<SearchResult />}
        />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/admin*" element={<AdminPage />} />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route path="*" element={<F0F />} />
      </Routes>
    </div>
  );
}

export default App;
