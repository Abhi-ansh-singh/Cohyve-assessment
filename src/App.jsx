import React from "react";
import { Route, Routes } from "react-router-dom";
import {Manifesto, Comet } from "./pages";
import { FirstPage, SecondPage } from "./layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage><Comet/></FirstPage>} />
      <Route path="/manifesto" element={<SecondPage><Manifesto/></SecondPage>} />
    </Routes>

    
  );
}

export default App;
