import React from 'react';
import "./stylesheets/Azure.css";

import {HashRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./router/Home";
import About from "./router/About";
import Projects from "./router/Projects";
import Contact from "./router/Contact";

import NoPage from "./router/NoPage";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" index element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
