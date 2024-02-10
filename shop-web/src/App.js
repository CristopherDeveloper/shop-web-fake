import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SearchProducts from "./components/SearchProducts"

const App =() => {
  return (
    <>
      <Routes>
        <Route path='/search-products' element={<SearchProducts/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
