import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
function App() {
  return (
    <React.Fragment>
 
      <main className="container">
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/update' element={<Update />} />
        
      </Routes>
      </BrowserRouter>
      </main>
    </React.Fragment>
  );
}

export default App;
