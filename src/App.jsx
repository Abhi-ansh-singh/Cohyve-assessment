import React from "react";
import { Route, Routes } from "react-router-dom";
import {Manifesto, Comet, Upgrade, Home, Discover, Login, Signup } from "./pages";
import { FirstPage, SecondPage } from "./layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage><Comet/></FirstPage>} />
      <Route path="/Home" element={<FirstPage><Home /></FirstPage>} />
      <Route path="/discover" element={<FirstPage><Discover /></FirstPage>} />
      <Route path="/login" element={<FirstPage><Login /></FirstPage>} />
      <Route path="/signup" element={<FirstPage><Signup /></FirstPage>} />

      <Route path="/manifesto" element={<SecondPage><Manifesto/></SecondPage>} />
      <Route path="/upgrade" element={<SecondPage><Upgrade/></SecondPage>} />
    </Routes>

    
  );
}

export default App;
